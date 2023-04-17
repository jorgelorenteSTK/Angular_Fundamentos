import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosPadreComponent } from './medicos-padre.component';

describe('MedicosPadreComponent', () => {
  let component: MedicosPadreComponent;
  let fixture: ComponentFixture<MedicosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
