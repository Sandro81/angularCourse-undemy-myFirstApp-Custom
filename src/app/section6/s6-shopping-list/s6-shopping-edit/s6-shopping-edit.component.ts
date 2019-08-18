import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-s6-shopping-edit',
  templateUrl: './s6-shopping-edit.component.html',
  styleUrls: ['./s6-shopping-edit.component.css']
})
export class S6ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
