import { Demo003Page } from './app.po';

describe('demo003 App', function() {
  let page: Demo003Page;

  beforeEach(() => {
    page = new Demo003Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
