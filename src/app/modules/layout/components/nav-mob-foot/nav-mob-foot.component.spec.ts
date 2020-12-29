import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMobFootComponent } from './nav-mob-foot.component';

describe('NavMobFootComponent', () => {
  let component: NavMobFootComponent;
  let fixture: ComponentFixture<NavMobFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMobFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMobFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
