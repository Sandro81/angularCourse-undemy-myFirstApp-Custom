import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../../../section9/s9-recipes/s9-recipe-list/recipe.model';

@Component({
  selector: 'app-s9-recipe-item',
  templateUrl: './s9-recipe-item.component.html',
  styleUrls: ['./s9-recipe-item.component.css']
})
export class S9RecipeItemComponent implements OnInit {



  @Input() recipe: RecipeModel;
  @Input() index: number;
  // void is useful to pass no information
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


  onSelected(){
    this.recipeSelected.emit();
  }

}
