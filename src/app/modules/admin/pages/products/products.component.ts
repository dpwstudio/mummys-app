import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { UploadImageService } from 'src/app/shared/services/upload-image/upload-image.service';
import { ProductService } from '../../../../shared/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private readonly notifier: NotifierService;
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  photoToUpload: File = null;
  fileInputLabel: string;
  currentFileUpload: any;
  addProductForm: FormGroup;
  loading = false;
  public href: string = "";
  returnUrl: string;
  starters: Product[];
  dishes: Product[];
  desserts: Product[];
  drinks: Product[];
  menus: Product[];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private uploadImageService: UploadImageService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.href = this.router.url;
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.addProductForm = this.formBuilder.group({
      uploadedImg: [""],
      image: [""],
      name: ["", Validators.required],
      category: ["", Validators.required],
      ingredient: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.getProducts();
  }

  get f() {
    return this.addProductForm.controls;
  }

  getProducts() {
    this.productService.getProducts().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(products => {
      this.starters = products.filter(product => product.category === 'entree');
      this.dishes = products.filter(product => product.category === 'plat');
      this.desserts = products.filter(product => product.category === 'dessert');
      this.drinks = products.filter(product => product.category === 'boisson');
      this.menus = products.filter(product => product.category === 'menu');
    })
  }

  onPhotoSelect(event) {
    const file = event.target.files[0];
    this.fileInputLabel = file.name;
    this.addProductForm.get('uploadedImg').setValue(file);
    this.addProductForm.get('image').setValue(file.name);
  }

  addProductDialog(content) {
    this.modalService.open(content, { centered: true });
  }

  addProduct() {
    this.loading = true;
    // stop here if form is invalid
    if (this.addProductForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('uploadedImg', this.addProductForm.get('uploadedImg').value);
    formData.append('agentId', '007');

    this.productService.createProduct(this.addProductForm.value).pipe(first())
      .subscribe(
        res => {
          this.uploadImageService.sendPhotoToServer(formData);
          this.router.navigate(['/products']);
          this.notifier.notify('success', 'Le produit a bien été ajouté.');
          this.getProducts();
          this.loading = false;
        },
        error => {
          this.notifier.notify('error', error.message)
          this.loading = false;
        });
    this.modalService.dismissAll();
  }
}
