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


  constructor() { }

  ngOnInit() {
  }

  // We have to attach something to this property to make it listenable from the parent component, @Output decorator.
  @Output() featureSelected = new EventEmitter<number>();

  onSelect(feature: number){
    // I want to use this property which now holds this event emitter as a value to emit an event whenever we click one of the buttons and I will then emit feature,
    this.featureSelected.emit(feature);
  }


}
