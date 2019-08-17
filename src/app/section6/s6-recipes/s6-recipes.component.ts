import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./s6-recipe-list/recipe.model";

@Component({
  selector: 'app-s6-recipes',
  templateUrl: './s6-recipes.component.html',
  styleUrls: ['./s6-recipes.component.css']
})
export class S6RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
