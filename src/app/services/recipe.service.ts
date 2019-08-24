import {RecipeModel} from '../section9/s9-recipes/s9-recipe-list/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../recipe/share/ingredient.model';
import {ShoppingListService} from '../section9/s9-shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();

  // I'll use the RecipeModel as an array for store the information for all components
  private recipes: RecipeModel[] = [
    new RecipeModel('Carbonare',
      'Carbonara is made with eggs!',
      'https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/3:2/w_1028,c_limit/pasta-carbonara.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('French Fries', 20),
      ]),
    new RecipeModel('Bistecca',
      'Bistecca is made with meat!',
      'https://www.curiouscuisiniere.com/wp-content/uploads/2018/07/Bistecca-alla-Fiorentina-Florentine-Steak-6350-1-2.jpg',
      [
        new IngredientModel('Buns', 2),
        new IngredientModel('Meat', 1),
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // that is a way to get our recipe.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]){
    this.slService.addIngredients(ingredients);

  }
}
