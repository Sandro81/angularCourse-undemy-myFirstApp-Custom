import {IngredientModel} from '../../recipe/share/ingredient.model';

export class ShoppingListService {
  private ingredients: IngredientModel[] = [
    new IngredientModel( 'Apples' ,  5),
    new IngredientModel( 'Tomatoes' ,  10),
  ];

  getIngredients() {
    console.log(this.ingredients.slice());
    return this.ingredients.slice();
  }

  addIngrediant(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
  }

}
