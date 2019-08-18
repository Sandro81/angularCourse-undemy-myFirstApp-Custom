import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l99-building-structural-directive',
  templateUrl: './l99-building-structural-directive.component.html',
  styleUrls: ['./l99-building-structural-directive.component.css']
})
export class L99BuildingStructuralDirectiveComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2 , 4];
  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

}
