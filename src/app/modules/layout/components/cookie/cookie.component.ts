import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
	showCookie = false;

  constructor() { }

  ngOnInit(): void {
		this.showCookie = true;
  }

}
