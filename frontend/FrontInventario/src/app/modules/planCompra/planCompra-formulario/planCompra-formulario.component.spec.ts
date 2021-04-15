import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCompraFormularioComponent } from './planCompra-formulario.component';

describe('RegistroFormularioComponent', () => {
  let component: PlanCompraFormularioComponent;
  let fixture: ComponentFixture<PlanCompraFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCompraFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCompraFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
