import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // I'll use the RecipeModel as an array for store the information for all components
  recipes: RecipeModel[] = [
    new RecipeModel('Carbonare', 'Carbonara is made with eggs!', 'https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/3:2/w_1028,c_limit/pasta-carbonara.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
