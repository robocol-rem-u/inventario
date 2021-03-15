import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroImagenComponent } from './registro-imagen.component';

describe('RegistroImagenComponent', () => {
  let component: RegistroImagenComponent;
  let fixture: ComponentFixture<RegistroImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
