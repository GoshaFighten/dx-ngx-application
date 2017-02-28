import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CityService]
    });
  });

  it('should ...', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));
});
