import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanCompraProductosComponent } from './planCompra-productos.component';

describe('PlanCompraProductosComponent', () => {
  let component: PlanCompraProductosComponent;
  let fixture: ComponentFixture<PlanCompraProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCompraProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCompraProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
