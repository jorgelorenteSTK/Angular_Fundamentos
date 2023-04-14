import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBicicletaComponent } from './formulario-bicicleta.component';

describe('FormularioBicicletaComponent', () => {
  let component: FormularioBicicletaComponent;
  let fixture: ComponentFixture<FormularioBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBicicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
