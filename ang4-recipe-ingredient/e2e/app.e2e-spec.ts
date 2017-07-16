import { Ang4RecipeIngredientPage } from './app.po';

describe('ang4-recipe-ingredient App', () => {
  let page: Ang4RecipeIngredientPage;

  beforeEach(() => {
    page = new Ang4RecipeIngredientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
