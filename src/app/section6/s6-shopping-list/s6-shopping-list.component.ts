import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../../recipe/share/ingredient.model";

@Component({
  selector: 'app-s6-shopping-list',
  templateUrl: './s6-shopping-list.component.html',
  styleUrls: ['./s6-shopping-list.component.css']
})
export class S6ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel( 'Apples' ,  5),
    new IngredientModel( 'Tomatoes' ,  10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
