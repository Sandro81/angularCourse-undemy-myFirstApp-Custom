import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-s6-recipe-item',
  templateUrl: './s6-recipe-item.component.html',
  styleUrls: ['./s6-recipe-item.component.css']
})
export class S6RecipeItemComponent implements OnInit {


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
