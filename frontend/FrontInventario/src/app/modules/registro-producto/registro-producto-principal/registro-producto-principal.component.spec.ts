import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductoPrincipalComponent } from './registro-producto-principal.component';

describe('RegistroProductoPrincipalComponent', () => {
  let component: RegistroProductoPrincipalComponent;
  let fixture: ComponentFixture<RegistroProductoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProductoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProductoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
