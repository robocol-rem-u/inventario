import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPrincipalComponent } from './registro-principal.component';

describe('RegistroPrincipalComponent', () => {
  let component: RegistroPrincipalComponent;
  let fixture: ComponentFixture<RegistroPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
