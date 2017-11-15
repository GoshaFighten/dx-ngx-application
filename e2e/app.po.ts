import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class DxNgxApplicationPage {
=======
export class AppPage {
>>>>>>> chore: initial commit from @angular/cli
  navigateTo() {
    return browser.get('/');
  }

<<<<<<< HEAD
  getGrid() {
    return element(by.css('app-root .dx-datagrid')).isDisplayed();
=======
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
>>>>>>> chore: initial commit from @angular/cli
  }
}
