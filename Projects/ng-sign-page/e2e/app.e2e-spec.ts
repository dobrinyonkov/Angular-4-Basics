import { NgSignPagePage } from './app.po';

describe('ng-sign-page App', () => {
  let page: NgSignPagePage;

  beforeEach(() => {
    page = new NgSignPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
