import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../../recipe/share/ingredient.model';

@Component({
  selector: 'app-s9-shopping-edit',
  templateUrl: './s9-shopping-edit.component.html',
  styleUrls: ['./s9-shopping-edit.component.css']
})
export class S9ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  // To emit the new values from the inputs
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // I use constant instead of let because we're not going to change these variables but they won't be variables anymore than as well we only assign these values one time and you should declare something as a constant.
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModel(ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }

}
