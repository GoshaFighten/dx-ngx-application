import { Component, OnInit } from '@angular/core';

import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navigationMenu: any[];
  toolbarLinks: any[];
  constructor() { }

  ngOnInit() {
    const caption = 'Angular DX Application';
    const links = appRoutes.filter(route => {
      return route.data && route.data['title'];
    }).map(route => {
      return {
        title: route.data['title'],
        path: '/' + route.path
      };
    });
    this.navigationMenu = [{
      key: caption,
      items: links
    }];
    this.toolbarLinks = links.map(link => {
      return {
        title: link.title,
        path: link.path,
        locateInMenu: 'always'
      };
    });
    this.toolbarLinks.push({
      title: caption,
      locateInMenu: 'never',
      location: 'before'
    });
  }
}
