import { browser, by, element } from 'protractor';

export class DxNgxApplicationPage {
  navigateTo() {
    return browser.get('/');
  }

  getGrid() {
    return element(by.css('app-root .dx-datagrid')).isDisplayed();
  }
}
