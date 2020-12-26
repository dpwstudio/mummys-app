import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isVisible$ = new BehaviorSubject(false);
  constructor() { }


  get isVisible(): boolean {
    return this.isVisible$.getValue();
  }

  showSidebar() {
    this.isVisible$.next(true);
  }

  hideSidebar() {
    this.isVisible$.next(false);
  }

  toggleSidebar(forceValue?: boolean) {
    if (typeof forceValue === 'boolean') {
      this.isVisible$.next(forceValue);
    } else {
      this.isVisible$.next(!this.isVisible$.getValue())
    }
  }
}
