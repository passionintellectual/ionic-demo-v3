/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlidesRepositoryService } from './slides-repository.service';

describe('Service: SlidesRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidesRepositoryService]
    });
  });

  it('should ...', inject([SlidesRepositoryService], (service: SlidesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});