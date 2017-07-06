import { Demo007Page } from './app.po';

describe('demo007 App', function() {
  let page: Demo007Page;

  beforeEach(() => {
    page = new Demo007Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
