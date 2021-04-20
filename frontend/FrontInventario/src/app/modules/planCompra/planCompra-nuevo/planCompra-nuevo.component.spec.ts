import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanCompraNuevoComponent } from './planCompra-nuevo.component';

describe('PlanCompraNuevoComponent', () => {
  let component: PlanCompraNuevoComponent;
  let fixture: ComponentFixture<PlanCompraNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanCompraNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCompraNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
