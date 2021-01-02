import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EmailService } from 'src/app/shared/services/email/email.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  private readonly notifier: NotifierService;
  resetPasswordForm: FormGroup;
  loading = false;
  returnUrl: string;
  currentUser: User;
  email = '';

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
    this.route.queryParamMap
      .subscribe((params) => {
        this.email = params.get('email');
        console.log('params', this.email)
      }
      );
    this.resetPasswordForm = this.formBuilder.group({
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.resetPasswordForm.controls;
  }

  resetPassword() {
    console.log('reset')
    this.loading = true;
    // stop here if form is invalid
    if (this.resetPasswordForm.value.password !== this.resetPasswordForm.value.confirmPassword) {
      this.notifier.notify("error", `Veuillez saisir le même mot de passe.`);
      return;
    }

    const obj = {
      password: this.resetPasswordForm.value.password,
      email: this.email
    }
    this.authService.resetPassword(obj)
      .pipe(first())
      .subscribe(
        data => {
          this.notifier.notify("success", `Votre mot de passe a été réinitialsé avec succès.`);
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
  }

}
