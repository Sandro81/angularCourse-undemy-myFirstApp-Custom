import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from "./recipe.model";
@Component({
  selector: 'app-s6-recipe-list',
  templateUrl: './s6-recipe-list.component.html',
  styleUrls: ['./s6-recipe-list.component.css']
})
export class S6RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  // I'll use the RecipeModel as an array for store the information for all components
  recipes: RecipeModel[] = [
    new RecipeModel('Carbonare', 'Carbonara is made with eggs!', 'https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/3:2/w_1028,c_limit/pasta-carbonara.jpg'),
    new RecipeModel('Bistecca', 'Bistecca is made with meat!', 'https://www.curiouscuisiniere.com/wp-content/uploads/2018/07/Bistecca-alla-Fiorentina-Florentine-Steak-6350-1-2.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(recipe: RecipeModel){
    // I want to use this property which now holds this event emitter as a value to emit an event whenever we click one of the buttons and I will then emit feature,
    this.recipeWasSelected.emit(recipe);
    console.log('index: '+recipe);
  }


}
