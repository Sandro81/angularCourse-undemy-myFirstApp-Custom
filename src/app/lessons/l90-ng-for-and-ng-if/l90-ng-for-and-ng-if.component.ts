import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l90-ng-for-and-ng-if',
  templateUrl: './l90-ng-for-and-ng-if.component.html',
  styleUrls: ['./l90-ng-for-and-ng-if.component.css']
})
export class L90NgForAndNgIfComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 2 , 5];
  evenNumbers = [2 , 4];
  onlyOdd = false;
  constructor() { }

  ngOnInit() {
  }

}
