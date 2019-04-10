import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncidentlistComponent } from './user-incidentlist.component';

describe('UserIncidentlistComponent', () => {
  let component: UserIncidentlistComponent;
  let fixture: ComponentFixture<UserIncidentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIncidentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIncidentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
