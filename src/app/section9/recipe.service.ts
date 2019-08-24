import {RecipeModel} from './s9-recipes/s9-recipe-list/recipe.model';

export class RecipeService {
  // I'll use the RecipeModel as an array for store the information for all components
  private recipes: RecipeModel[] = [
    new RecipeModel('Carbonare', 'Carbonara is made with eggs!', 'https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/3:2/w_1028,c_limit/pasta-carbonara.jpg'),
    new RecipeModel('Bistecca', 'Bistecca is made with meat!', 'https://www.curiouscuisiniere.com/wp-content/uploads/2018/07/Bistecca-alla-Fiorentina-Florentine-Steak-6350-1-2.jpg')
  ];

  getRecipes() {
    // that is a way to get our recipe.
    return this.recipes.slice();
  }
}
