import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // I'll use the RecipeModel as an array for store the information for all components
  recipes: RecipeModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
