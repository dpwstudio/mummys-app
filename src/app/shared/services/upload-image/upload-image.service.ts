import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private readonly notifier: NotifierService;
  currentUser: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    this.currentUser = this.authService.currentUserValue;
  }

  sendPhotoToServer(image) {
    return this.http.post(`${environment.mummysApi}/images`, image).subscribe(
      res => {
        console.log('Image uploaded with success.');
      },
      error => {
        console.error('error', error.message);
      });;
  }

}
