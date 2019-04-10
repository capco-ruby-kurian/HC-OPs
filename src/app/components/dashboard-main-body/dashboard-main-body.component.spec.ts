import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainBodyComponent } from './dashboard-main-body.component';

describe('DashboardMainBodyComponent', () => {
  let component: DashboardMainBodyComponent;
  let fixture: ComponentFixture<DashboardMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
