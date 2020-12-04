import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  p: number = 1;
  numberPerPage = 6;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showDetail(content) {
    this.modalService.open(content, { centered: true });
  }

}
