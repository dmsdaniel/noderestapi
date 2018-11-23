import { JediAcademyPage } from './app.po';

describe('jedi-academy App', () => {
  let page: JediAcademyPage;

  beforeEach(() => {
    page = new JediAcademyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jad works!');
  });
});
