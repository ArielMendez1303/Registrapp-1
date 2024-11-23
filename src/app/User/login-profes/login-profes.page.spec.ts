import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginProfesPage } from './login-profes.page';

describe('LoginProfesPage', () => {
  let component: LoginProfesPage;
  let fixture: ComponentFixture<LoginProfesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
