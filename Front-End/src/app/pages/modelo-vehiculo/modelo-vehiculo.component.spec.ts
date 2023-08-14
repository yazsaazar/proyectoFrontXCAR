import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloVehiculoComponent } from './modelo-vehiculo.component';

describe('ModeloVehiculoComponent', () => {
  let component: ModeloVehiculoComponent;
  let fixture: ComponentFixture<ModeloVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
