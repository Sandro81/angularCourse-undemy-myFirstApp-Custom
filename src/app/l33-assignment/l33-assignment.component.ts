import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l33-assignment',
  templateUrl: './l33-assignment.component.html',
  styleUrls: ['./l33-assignment.component.css']
})
export class L33AssignmentComponent implements OnInit {
  username = '';
  allowButton = false;
  constructor() { }

  ngOnInit() {
  }
  buttonEnable() {
    if(this.username != ''){
      this.allowButton = true;
    }
  }

  resetButton(){
    this.username = '';
    this.allowButton = false;
  }
}
