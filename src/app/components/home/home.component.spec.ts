import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { DevExtremeModule } from 'devextreme-angular';
import { TranslateStubPipe } from './../../../../testing/index';

import { OrderService } from './../../services/order/order.service';
import { ORDERS } from './../../services/order/mock-orders';

import { CountryService } from './../../services/country/country.service';
import { COUNTRIES } from './../../services/country/mock-countries';

import { CityService } from './../../services/city/city.service';
import { CITIES } from './../../services/city/mock-cities';

class OrderServiceSpy {
  getOrders = jasmine.createSpy('getOrders').and.callFake(
    () => Promise
      .resolve(ORDERS)
  );
}

class CountryServiceSpy {
  getCountries = jasmine.createSpy('getCountries').and.callFake(
    () => Promise
      .resolve(COUNTRIES)
  );
}

class CityServiceSpy {
  getCities = jasmine.createSpy('getCities').and.callFake(
    () => Promise
      .resolve(CITIES)
  );
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DevExtremeModule],
      declarations: [
        HomeComponent,
        TranslateStubPipe
      ]
    })
      .overrideComponent(HomeComponent, {
        set: {
          providers: [
            { provide: OrderService, useClass: OrderServiceSpy },
            { provide: CountryService, useClass: CountryServiceSpy },
            { provide: CityService, useClass: CityServiceSpy }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render DxDataGrid', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dx-datagrid')).toBeTruthy();
  }));
});
