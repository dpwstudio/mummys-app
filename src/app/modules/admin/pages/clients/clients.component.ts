import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  users: User[];
  p: number = 1;
  numberPerPage = 6;
  
  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().pipe(
      catchError(error => {
        return throwError(error);
      })
    ).subscribe(users => {
      this.users = users;
    })
  }

  showDetail(content) {
    this.modalService.open(content, { centered: true });
  }

  getTotalSubscribers() {
    return this.users?.reduce((acc, user) => acc + user.newsletter, 0);
  }

}
