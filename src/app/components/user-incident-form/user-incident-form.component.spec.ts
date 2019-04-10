import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncidentFormComponent } from './user-incident-form.component';

describe('UserIncidentFormComponent', () => {
  let component: UserIncidentFormComponent;
  let fixture: ComponentFixture<UserIncidentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIncidentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIncidentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
