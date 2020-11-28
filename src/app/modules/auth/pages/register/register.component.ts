import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';
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
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('this.registerForm', this.registerForm.value);
    this.loading = true;
    this.authService.register(this.registerForm.value).pipe(first())
      .subscribe(
        data => {
          console.log('data', data);
					this.notifier.notify("success", 'You are now registered.');
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error', error);
					this.notifier.notify("success", error.message);
          this.loading = false;
        });
  }
}
