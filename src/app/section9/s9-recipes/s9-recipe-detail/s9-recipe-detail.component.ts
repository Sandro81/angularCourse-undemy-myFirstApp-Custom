import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../../section9/s9-recipes/s9-recipe-list/recipe.model';
import {RecipeService} from '../../../services/recipe.service';

@Component({
  selector: 'app-s9-recipe-detail',
  templateUrl: './s9-recipe-detail.component.html',
  styleUrls: ['./s9-recipe-detail.component.css']
})
export class S9RecipeDetailComponent implements OnInit {

  @Input() recipe: RecipeModel;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
