import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DevExtremeModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppLocalizeModule } from './app-localize.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppLocalizeModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
