import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRoleConfigComponent } from './auth-role-config.component';

describe('AuthRoleConfigComponent', () => {
  let component: AuthRoleConfigComponent;
  let fixture: ComponentFixture<AuthRoleConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRoleConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRoleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
