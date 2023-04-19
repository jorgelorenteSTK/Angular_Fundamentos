import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasCrudComponent } from './facturas-crud.component';

describe('FacturasCrudComponent', () => {
  let component: FacturasCrudComponent;
  let fixture: ComponentFixture<FacturasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
