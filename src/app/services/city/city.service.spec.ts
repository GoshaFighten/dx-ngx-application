import { TestBed, inject } from '@angular/core/testing';

import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityService]
    });
  });

  it('should ...', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));
});
