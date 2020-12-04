import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config/config';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  currentUser: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  createProduct(product: Product) {
    console.log('product', product);
    return this.http.post(`${apiUrl}/products`, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${apiUrl}/products`) as Observable<Product[]>;
  }

  editProduct(product) {
    return this.http.put(`${apiUrl}/products/${product.id}`, product);
  }

  deleteProduct(id) {
    return this.http.delete(`${apiUrl}/products/${id}`);
  }

}
