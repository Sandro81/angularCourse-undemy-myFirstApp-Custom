import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../section9/s9-recipes/s9-recipe-list/recipe.model';

@Component({
  selector: 'app-s9-recipes',
  templateUrl: './s9-recipes.component.html',
  styleUrls: ['./s9-recipes.component.css']
})
export class S9RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
