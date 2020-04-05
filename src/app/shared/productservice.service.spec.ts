import { TestBed } from '@angular/core/testing';

import { ProductdataService } from './productservice.service';

describe('ProductserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductdataService = TestBed.get(ProductdataService);
    expect(service).toBeTruthy();
  });
});
