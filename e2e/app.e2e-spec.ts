import { NgTalkPage } from './app.po';

describe('ng-talk App', () => {
  let page: NgTalkPage;

  beforeEach(() => {
    page = new NgTalkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
