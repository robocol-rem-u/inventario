import { TestBed } from '@angular/core/testing';

import { PlanCompraService } from './planCompra.service';

describe('PlanCompraService', () => {
  let service: PlanCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
