import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaVehiculosComponent } from './busqueda-vehiculos.component';

describe('BusquedaVehiculosComponent', () => {
  let component: BusquedaVehiculosComponent;
  let fixture: ComponentFixture<BusquedaVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
