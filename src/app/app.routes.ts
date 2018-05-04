import { Routes } from '@angular/router';
import { HomeComponent, CounterComponent, SettingsComponent } from './components';

export const appRoutes: Routes = [{
    path: 'home',
    component: HomeComponent,
    data: {
        title: 'NavMenu.Home'
    }
}, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'counter',
    component: CounterComponent,
    data: {
        title: 'NavMenu.Counter'
    }
}, {
    path: 'settings',
    component: SettingsComponent,
    data: {
        title: 'NavMenu.Settings'
    }
}];
