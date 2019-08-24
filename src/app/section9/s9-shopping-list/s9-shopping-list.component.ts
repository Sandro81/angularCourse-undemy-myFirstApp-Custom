import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../../recipe/share/ingredient.model';

@Component({
  selector: 'app-s9-shopping-list',
  templateUrl: './s9-shopping-list.component.html',
  styleUrls: ['./s9-shopping-list.component.css']
})
export class S9ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel( 'Apples' ,  5),
    new IngredientModel( 'Tomatoes' ,  10),
  ];

  constructor() { }

  ngOnInit() {
  }


  onIngredientAdded(ingredient: IngredientModel) {
    // Push the new ingredient come from the ./s6-shopping-edit.component.html into the ingredients array
    this.ingredients.push(ingredient);
  }

}
