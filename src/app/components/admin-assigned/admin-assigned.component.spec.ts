import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignedComponent } from './admin-assigned.component';

describe('AdminAssignedComponent', () => {
  let component: AdminAssignedComponent;
  let fixture: ComponentFixture<AdminAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
