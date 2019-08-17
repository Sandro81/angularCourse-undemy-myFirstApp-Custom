import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-s6-recipe-item',
  templateUrl: './s6-recipe-item.component.html',
  styleUrls: ['./s6-recipe-item.component.css']
})
export class S6RecipeItemComponent implements OnInit {


  @Input() recipe: RecipeModel;
  constructor() { }

  ngOnInit() {
  }

}
