import { NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-reuse-strategy';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ]
})
export class AppRoutingModule { }
