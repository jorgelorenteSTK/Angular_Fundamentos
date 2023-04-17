import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesHijoComponent } from './pacientes-hijo.component';

describe('PacientesHijoComponent', () => {
  let component: PacientesHijoComponent;
  let fixture: ComponentFixture<PacientesHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
