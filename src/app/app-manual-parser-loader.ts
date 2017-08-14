import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ManualParserLoader } from 'localize-router';
import { locale } from 'devextreme/localization';

import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

export class AppManualParserLoader extends ManualParserLoader {
    constructor(translate: TranslateService, location: Location, private injector: Injector, locales?: Array<string>, prefix?: string) {
        super(translate, location, locales, prefix);
    }
    public get router(): Router {
        return this.injector.get(Router);
    }
    translateRoutes(language: string): Observable<any> {
        if (this.router && this.router.routeReuseStrategy['clearState']) {
            this.router.routeReuseStrategy['clearState']();
        }
        locale(language);
        return super.translateRoutes(language);
    }
}
