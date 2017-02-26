import { DxNgxApplicationPage } from './app.po';

describe('dx-ngx-application App', () => {
  let page: DxNgxApplicationPage;

  beforeEach(() => {
    page = new DxNgxApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
