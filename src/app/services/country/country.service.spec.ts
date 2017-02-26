import { TestBed, inject } from '@angular/core/testing';

import { CountryService } from './country.service';

describe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryService]
    });
  });

  it('should ...', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
});
