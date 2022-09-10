import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  createUser(user: User) {
    return this.http.post(`${environment.mummysApi}/users`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.mummysApi}/users`) as Observable<User[]>;
  }
  
  getUser(id): Observable<User[]> {
    return this.http.get(`${environment.mummysApi}/users/${id}`) as Observable<User[]>;
  }

  editUser(user) {
    console.log('this.currentUser', this.currentUser);
    return this.http.put(`${environment.mummysApi}/users/${this.currentUser.id}`, user);
  }

  editAddress(address) {
    return this.http.put(`${environment.mummysApi}/users/${this.currentUser.id}`, address);
  }

  deleteUser(id) {
    return this.http.delete(`${environment.mummysApi}/users/${id}`);
  }

}
