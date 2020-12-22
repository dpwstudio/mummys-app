import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { EmailService } from '../../../../shared/services/email/email.service';
import { first } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private readonly notifier: NotifierService;
  registerForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private emailService: EmailService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      zipcode: ["", Validators.required],
      city: ["", Validators.required],
      phone: ["", Validators.required],
      newsletter: [""],
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.loading = true;
    
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('this.registerForm', this.registerForm.value);

    let email = {
      email: this.registerForm.value.email
    }

    this.authService.register(this.registerForm.value).pipe(first())
      .subscribe(
        data => {
          console.log('data', data);
          this.notifier.notify("success", 'Votre inscription a bien été prise en compte.');``
          this.emailService.sendEmail(email).subscribe(data => console.log('send email', data));
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error', error);
          if (error.status === 409) {
            this.notifier.notify("error", 'Cet email existe déjà, veuillez en saisir un autre.');
          } else {
            this.notifier.notify("error", error.message);
          }
          this.loading = false;
        });
  }
}
