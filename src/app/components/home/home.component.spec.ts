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
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    const os = fixture.debugElement.injector.get(OrderService);
    spyOn(os, 'getOrders').and.returnValue(Promise.resolve(ORDERS));

    const cnts = fixture.debugElement.injector.get(CountryService);
    spyOn(cnts, 'getCountries').and.returnValue(Promise.resolve(COUNTRIES));

    const cts = fixture.debugElement.injector.get(CityService);
    spyOn(cts, 'getCities').and.returnValue(Promise.resolve(CITIES));

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
