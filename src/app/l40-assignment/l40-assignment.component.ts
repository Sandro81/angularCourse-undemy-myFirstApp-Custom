import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l40-assignment',
  templateUrl: './l40-assignment.component.html',
  styleUrls: ['./l40-assignment.component.css']
})
export class L40AssignmentComponent implements OnInit {

  paragraf: boolean = true;
  logArray = [];
  constructor() { }

  ngOnInit() {
  }

  pustButton(){
    this.paragraf = !this.paragraf;
    this.logArray.push(Date.now());
  }
}
