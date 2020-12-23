import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { first } from 'rxjs/operators';
import { EmailService } from 'src/app/shared/services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private readonly notifier: NotifierService;
  contactForm: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private emailService: EmailService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    console.log('this.contactForm', this.contactForm.value);

    this.emailService.sendEmailToAdmin(this.contactForm.value)
      .subscribe(
        data => {
          console.log('data', data);
          this.notifier.notify("success", 'Votre message a bien été envoyé.');
          this.router.navigate(['/home']);
          this.loading = false;
        },
        error => {
          console.log('error', error);
          this.notifier.notify("error", error.message);
          this.loading = false;
        });
  }

}
