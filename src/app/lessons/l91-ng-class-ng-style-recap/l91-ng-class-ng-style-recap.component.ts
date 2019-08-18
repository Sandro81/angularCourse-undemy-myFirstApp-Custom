import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l91-ng-class-ng-style-recap',
  templateUrl: './l91-ng-class-ng-style-recap.component.html',
  styleUrls: ['./l91-ng-class-ng-style-recap.component.css']
})
export class L91NgClassNgStyleRecapComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 2 , 5];
  evenNumbers = [2 , 4];
  onlyOdd = false;
  constructor() { }

  ngOnInit() {
  }

}
