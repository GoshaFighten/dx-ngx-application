import { NgModule, Injector } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeRouterModule, LocalizeParser, LocalizeRouterService } from 'localize-router';
import { AppManualParserLoader } from './app-manual-parser-loader';
import { appRoutes } from './app.routes';
import { loadMessages } from 'devextreme/localization';
import 'devextreme-intl';
import * as messagesDe from 'devextreme/localization/messages/de.json';

loadMessages(messagesDe);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

export function localizeLoaderFactory(translate: TranslateService, location: Location, injector: Injector) {
  return new AppManualParserLoader(translate, location, injector, ['en', 'de']);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LocalizeRouterModule.forRoot(appRoutes, {
      provide: LocalizeParser,
      useFactory: localizeLoaderFactory,
      deps: [TranslateService, Location, Injector]
    }),
  ],
  exports: [
    TranslateModule,
    LocalizeRouterModule
  ]
})
export class AppLocalizeModule {
}
