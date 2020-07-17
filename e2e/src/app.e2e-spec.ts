import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display correct reset text', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Recent Transactions');
  });

});
