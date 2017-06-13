import { Demo002Page } from './app.po';

describe('demo002 App', function() {
  let page: Demo002Page;

  beforeEach(() => {
    page = new Demo002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
