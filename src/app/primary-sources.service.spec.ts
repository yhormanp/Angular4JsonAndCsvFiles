import { TestBed, inject } from '@angular/core/testing';

import { PrimarySourcesService } from './primary-sources.service';

describe('PrimarySourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimarySourcesService]
    });
  });

  it('should be created', inject([PrimarySourcesService], (service: PrimarySourcesService) => {
    expect(service).toBeTruthy();
  }));
});
