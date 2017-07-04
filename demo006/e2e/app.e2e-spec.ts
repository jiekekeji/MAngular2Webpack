import { Demo005Page } from './app.po';

describe('demo005 App', function() {
  let page: Demo005Page;

  beforeEach(() => {
    page = new Demo005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
