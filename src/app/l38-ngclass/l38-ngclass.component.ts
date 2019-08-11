import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l38-ngclass',
  templateUrl: './l38-ngclass.component.html',
  styleUrls: ['./l38-ngclass.component.css']
})
export class L38NgclassComponent implements OnInit {


  highContrast: boolean = false;
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

  getColor() {
    return 'rgb('+this.randomNumberA+', '+this.randomNumberB+', '+this.randomNumberC+')';
  }

}
