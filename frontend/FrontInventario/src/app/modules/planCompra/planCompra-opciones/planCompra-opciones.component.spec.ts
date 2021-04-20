import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanCompraOpcionesComponent } from './planCompra-opciones.component';

describe('PlanCompraOpcionesComponent', () => {
  let component: PlanCompraOpcionesComponent;
  let fixture: ComponentFixture<PlanCompraOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCompraOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCompraOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
