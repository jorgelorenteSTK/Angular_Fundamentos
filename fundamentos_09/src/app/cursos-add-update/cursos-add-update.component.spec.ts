import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAddUpdateComponent } from './cursos-add-update.component';

describe('CursosAddUpdateComponent', () => {
  let component: CursosAddUpdateComponent;
  let fixture: ComponentFixture<CursosAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAddUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
