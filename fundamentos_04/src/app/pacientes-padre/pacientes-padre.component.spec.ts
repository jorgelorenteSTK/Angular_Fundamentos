import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesPadreComponent } from './pacientes-padre.component';

describe('PacientesPadreComponent', () => {
  let component: PacientesPadreComponent;
  let fixture: ComponentFixture<PacientesPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
