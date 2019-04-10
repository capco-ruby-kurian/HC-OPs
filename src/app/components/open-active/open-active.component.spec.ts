import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenActiveComponent } from './open-active.component';

describe('OpenActiveComponent', () => {
  let component: OpenActiveComponent;
  let fixture: ComponentFixture<OpenActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
