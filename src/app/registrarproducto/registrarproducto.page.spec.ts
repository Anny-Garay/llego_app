import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarproductoPage } from './registrarproducto.page';

describe('RegistrarproductoPage', () => {
  let component: RegistrarproductoPage;
  let fixture: ComponentFixture<RegistrarproductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
