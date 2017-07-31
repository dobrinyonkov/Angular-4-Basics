import { NgGalleryPrjPage } from './app.po';

describe('ng-gallery-prj App', () => {
  let page: NgGalleryPrjPage;

  beforeEach(() => {
    page = new NgGalleryPrjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
