import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l37-ngstyle',
  templateUrl: './l37-ngstyle.component.html',
  styleUrls: ['./l37-ngstyle.component.css']
})
export class L37NgstyleComponent implements OnInit {

  randomNumber: number =  Math.random();

  constructor() {
  }

  ngOnInit() {
  }

}
