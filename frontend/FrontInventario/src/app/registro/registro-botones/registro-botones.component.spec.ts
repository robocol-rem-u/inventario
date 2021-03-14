import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBotonesComponent } from './registro-botones.component';

describe('RegistroBotonesComponent', () => {
  let component: RegistroBotonesComponent;
  let fixture: ComponentFixture<RegistroBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroBotonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
