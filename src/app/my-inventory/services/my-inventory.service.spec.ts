import { TestBed } from '@angular/core/testing';

import { MyInventoryService } from './my-inventory.service';

describe('MyInventoryService', () => {
  let service: MyInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
