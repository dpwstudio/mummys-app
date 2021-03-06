import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmailService } from 'src/app/shared/services/email/email.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {
  private readonly notifier: NotifierService;
  lostPasswordForm: FormGroup;
  loading = false;
  returnUrl: string;
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private emailService: EmailService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.lostPasswordForm = this.formBuilder.group({
      email: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.lostPasswordForm.controls;
  }

  sendRequest() {
    this.loading = true;
    // stop here if form is invalid
    if (this.lostPasswordForm.invalid) {
      return;
    }

    this.authService.lostPassword(this.lostPasswordForm.value)
      .subscribe(
        data => {
          this.emailService.sendEmailForLostPassword(this.lostPasswordForm.value).subscribe(() => {
            this.router.navigate(['home']);
            this.notifier.notify("success", `La demande a bien été pris en compte, vérifiez vos emails pour réinitialiser votre mot de passe.`);
            this.loading = false;
          });

        },
        error => {
          this.notifier.notify('error', error.error.message);
          this.loading = false;
        });
  }
}
