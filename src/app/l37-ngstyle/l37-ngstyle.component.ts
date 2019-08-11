import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l37-ngstyle',
  templateUrl: './l37-ngstyle.component.html',
  styleUrls: ['./l37-ngstyle.component.css']
})
export class L37NgstyleComponent implements OnInit {


  multiplicator: number = 255;
  randomNumberA: number =  this.randomFloorNumber(this.multiplicator);
  randomNumberB: number =  this.randomFloorNumber(this.multiplicator);
  randomNumberC: number =  this.randomFloorNumber(this.multiplicator);

  constructor() {
  }

  ngOnInit() {
  }

  randomFloorNumber(multiplicator){
    return Math.floor(Math.random() * multiplicator);
  }

  randomNumberFunction() {
    this.randomNumberA =  this.randomFloorNumber(this.multiplicator);
    this.randomNumberB =  this.randomFloorNumber(this.multiplicator);
    this.randomNumberC =  this.randomFloorNumber(this.multiplicator);
  }

  getColor() {
    return 'rgb('+this.randomNumberA+', '+this.randomNumberB+', '+this.randomNumberC+')';
  }
}
