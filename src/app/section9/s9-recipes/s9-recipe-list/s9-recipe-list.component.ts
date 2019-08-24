import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../../../section9/s9-recipes/s9-recipe-list/recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-s9-recipe-list',
  templateUrl: './s9-recipe-list.component.html',
  styleUrls: ['./s9-recipe-list.component.css']
})
export class S9RecipeListComponent implements OnInit {

  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
