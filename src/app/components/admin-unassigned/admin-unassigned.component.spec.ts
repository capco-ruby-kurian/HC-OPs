import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnassignedComponent } from './admin-unassigned.component';

describe('AdminUnassignedComponent', () => {
  let component: AdminUnassignedComponent;
  let fixture: ComponentFixture<AdminUnassignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnassignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
