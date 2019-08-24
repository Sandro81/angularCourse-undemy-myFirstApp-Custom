import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../section9/s9-recipes/s9-recipe-list/recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-s9-recipes',
  templateUrl: './s9-recipes.component.html',
  styleUrls: ['./s9-recipes.component.css'],
  providers: [RecipeService]
})
export class S9RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: RecipeModel) => {
          // the function body
          this.selectedRecipe = recipe;
        }
      );
// (recipe: RecipeModel) that is the argument list

  }

}
