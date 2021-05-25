import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesPrincipalComponent } from './mensajes-principal.component';

describe('MensajesPrincipalComponent', () => {
  let component: MensajesPrincipalComponent;
  let fixture: ComponentFixture<MensajesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
