import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanCompraPrincipalComponent } from './planCompra-principal.component';

describe('PlanCompraPrincipalComponent', () => {
  let component: PlanCompraPrincipalComponent;
  let fixture: ComponentFixture<PlanCompraPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCompraPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCompraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
