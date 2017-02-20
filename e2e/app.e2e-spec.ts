import { MitarbeiterverwaltungV2Page } from './app.po';

describe('mitarbeiterverwaltung-v2 App', function() {
  let page: MitarbeiterverwaltungV2Page;

  beforeEach(() => {
    page = new MitarbeiterverwaltungV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
