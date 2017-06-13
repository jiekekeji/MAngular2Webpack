import { Demo001Page } from './app.po';

describe('demo001 App', function() {
  let page: Demo001Page;

  beforeEach(() => {
    page = new Demo001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
