import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../s6-recipe-list/recipe.model";

@Component({
  selector: 'app-s6-recipe-detail',
  templateUrl: './s6-recipe-detail.component.html',
  styleUrls: ['./s6-recipe-detail.component.css']
})
export class S6RecipeDetailComponent implements OnInit {

  @Input() recipe: RecipeModel;


  constructor() { }

  ngOnInit() {
  }

}
