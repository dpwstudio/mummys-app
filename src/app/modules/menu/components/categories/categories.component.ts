import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  href: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url.substr(1);
  }

  goToCategory(category) {
    return this.router.navigate([category])
  }
}
