import {IngredientModel} from '../../recipe/share/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel( 'Apples' ,  5),
    new IngredientModel( 'Tomatoes' ,  10),
  ];

  getIngredients() {
    console.log(this.ingredients);
    return this.ingredients.slice();
  }

  addIngrediant(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
  /*  for(let ingredient of ingredients) {
      this.addIngrediant()
    }*/

  this.ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
