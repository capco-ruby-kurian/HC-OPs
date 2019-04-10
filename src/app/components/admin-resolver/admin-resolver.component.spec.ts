import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResolverComponent } from './admin-resolver.component';

describe('AdminResolverComponent', () => {
  let component: AdminResolverComponent;
  let fixture: ComponentFixture<AdminResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
