import { DxNgxApplicationPage } from './app.po';

describe('dx-ngx-application App', () => {
  let page: DxNgxApplicationPage;

  beforeEach(() => {
    page = new DxNgxApplicationPage();
  });

  it('should display DxDataGrid', () => {
    page.navigateTo();
    expect(page.getGrid()).toBeTruthy();
  });
});
