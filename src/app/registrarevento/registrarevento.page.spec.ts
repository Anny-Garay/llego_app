import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrareventoPage } from './registrarevento.page';

describe('RegistrareventoPage', () => {
  let component: RegistrareventoPage;
  let fixture: ComponentFixture<RegistrareventoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrareventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
