import { CnodeWebPage } from './app.po';

describe('cnode-web App', function() {
  let page: CnodeWebPage;

  beforeEach(() => {
    page = new CnodeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
