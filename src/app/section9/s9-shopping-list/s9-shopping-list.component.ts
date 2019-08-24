import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../../recipe/share/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-s9-shopping-list',
  templateUrl: './s9-shopping-list.component.html',
  styleUrls: ['./s9-shopping-list.component.css']
})
export class S9ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[];

  constructor(private slListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slListService.getIngredients();
  }

}
