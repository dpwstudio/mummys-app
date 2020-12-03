import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MummysCounterComponent } from './mummys-counter.component';

describe('MummysCounterComponent', () => {
  let component: MummysCounterComponent;
  let fixture: ComponentFixture<MummysCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MummysCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MummysCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
