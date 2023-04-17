import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosHijoComponent } from './medicos-hijo.component';

describe('MedicosHijoComponent', () => {
  let component: MedicosHijoComponent;
  let fixture: ComponentFixture<MedicosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
