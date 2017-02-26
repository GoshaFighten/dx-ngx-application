import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalizeRouterService } from 'localize-router';

import { SettingsComponent } from './settings.component';

import { DevExtremeModule } from 'devextreme-angular';
import { TranslateStubPipe, LocalizeServiceStub } from './../../../../testing/index';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DevExtremeModule],
      declarations: [
        SettingsComponent,
        TranslateStubPipe
      ],
      providers: [{ provide: LocalizeRouterService, useClass: LocalizeServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
