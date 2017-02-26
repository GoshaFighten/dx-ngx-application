import { browser, element, by } from 'protractor';

export class DxNgxApplicationPage {
  navigateTo() {
    return browser.get('/');
  }

  getGrid() {
    return element(by.css('app-root .dx-datagrid')).isDisplayed();
  }
}
