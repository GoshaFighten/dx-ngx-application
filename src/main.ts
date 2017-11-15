import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule);
=======
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> chore: initial commit from @angular/cli
