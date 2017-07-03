import { Demo004Page } from './app.po';

describe('demo004 App', function() {
  let page: Demo004Page;

  beforeEach(() => {
    page = new Demo004Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
