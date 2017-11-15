<<<<<<< HEAD
import { DxNgxApplicationPage } from './app.po';

describe('dx-ngx-application App', () => {
  let page: DxNgxApplicationPage;

  beforeEach(() => {
    page = new DxNgxApplicationPage();
  });

  it('should display DxDataGrid', () => {
    page.navigateTo();
    expect(page.getGrid()).toBeTruthy();
=======
import { AppPage } from './app.po';

describe('ngtest App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> chore: initial commit from @angular/cli
  });
});
