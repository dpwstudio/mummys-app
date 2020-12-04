import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  p: number = 1;
  numberPerPage = 6;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  showDetail(content) {
    this.modalService.open(content, { centered: true });
  }

}
