import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config/config';
import { User } from '../../models/user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x[0]);
  }

  createUser(user: User) {
    console.log('user', user);
    return this.http.post(`${apiUrl}/users`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${apiUrl}/users`) as Observable<User[]>;
  }
  
  getUser(id): Observable<User[]> {
    return this.http.get(`${apiUrl}/users/${id}`) as Observable<User[]>;
  }

  editUser(user) {
    return this.http.put(`${apiUrl}/users/${user.id}`, user);
  }

  editAddress(address) {
    return this.http.put(`${apiUrl}/users/${this.currentUser.id}`, address);
  }

  deleteUser(id) {
    return this.http.delete(`${apiUrl}/users/${id}`);
  }

}
