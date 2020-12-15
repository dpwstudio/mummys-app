import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancelledComponent } from './order-cancelled.component';

describe('OrderCancelledComponent', () => {
  let component: OrderCancelledComponent;
  let fixture: ComponentFixture<OrderCancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
