import { HttpClientAppPage } from './app.po';

describe('http-client-app App', function() {
  let page: HttpClientAppPage;

  beforeEach(() => {
    page = new HttpClientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
