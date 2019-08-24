import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../../../../section9/s9-recipes/s9-recipe-list/recipe.model';
import {RecipeService} from '../../../recipe.service';

@Component({
  selector: 'app-s9-recipe-item',
  templateUrl: './s9-recipe-item.component.html',
  styleUrls: ['./s9-recipe-item.component.css']
})
export class S9RecipeItemComponent implements OnInit {



  @Input() recipe: RecipeModel;
  @Input() index: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


  onSelected() {
    // we can use this recipe selected event emitter and call emit and emit the recipe of this recipe item component because that is the one we selected and that's the data we want to pass.
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
