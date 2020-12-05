import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  private readonly notifier: NotifierService;
  carts: Cart[];
  currentUser: User;
  editDeliveryAddressForm: FormGroup;
  loading = false;

  constructor(
    private cartService: CartService,
    private modalService: NgbModal,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
  }

  ngOnInit(): void {
    this.getCarts();
    this.editDeliveryAddressForm = this.formBuilder.group({
      address: ["", Validators.required],
      zipcode: ["", Validators.required],
      city: ["", Validators.required]
    });
  }

  getCarts() {
    this.carts = this.cartService.cartProductList;
  }


  get f() {
    return this.editDeliveryAddressForm.controls;
  }

  editDeliveryAddressDialog(content) {
    this.modalService.open(content, { centered: true });
  }

  editDeliveryAddress() {
    // stop here if form is invalid
    if (this.editDeliveryAddressForm.invalid) {
      return;
    }

    console.log('this.f', this.f);

    this.userService.editAddress(this.editDeliveryAddressForm.value).pipe(first())
      .subscribe(
        res => {
          this.getUserById();
          this.refresh()
        },
        error => {
          this.notifier.notify('error', error.message)
        });
    this.modalService.dismissAll();
  }

  getUserById() {
    const userId = this.currentUser.id;
    this.userService.getUser(userId).pipe(
      catchError(error => {
        return throwError(error);
      })
    ).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
    })
  }

  refresh(): void {
    this.loading = true
    window.location.reload();
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }


}
