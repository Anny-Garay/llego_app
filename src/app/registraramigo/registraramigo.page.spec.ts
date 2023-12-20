import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistraramigoPage } from './registraramigo.page';

describe('RegistraramigoPage', () => {
  let component: RegistraramigoPage;
  let fixture: ComponentFixture<RegistraramigoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistraramigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
