import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncidentformReopenComponent } from './user-incidentform-reopen.component';

describe('UserIncidentformReopenComponent', () => {
  let component: UserIncidentformReopenComponent;
  let fixture: ComponentFixture<UserIncidentformReopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIncidentformReopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIncidentformReopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
