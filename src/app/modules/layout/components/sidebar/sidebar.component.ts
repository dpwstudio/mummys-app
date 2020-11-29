import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	private readonly notifier: NotifierService;
  currentUser: User;

  constructor(
    private router: Router,
    public authService: AuthService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
    this.currentUser = this.authService.currentUserValue;
    console.log('this.currentUser', this.currentUser)
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.authService.currentUserValue;
  }

  logout() {
    this.authService.logout();
    this.notifier.notify('success', 'Vous êtes déconnecté')
    this.router.navigate(["/login"]);
  }

}
