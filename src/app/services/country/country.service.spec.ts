import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryService } from './country.service';

describe('CountryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CountryService]
        });
    });

    it('should ...', inject([CountryService], (service: CountryService) => {
        expect(service).toBeTruthy();
    }));
});
