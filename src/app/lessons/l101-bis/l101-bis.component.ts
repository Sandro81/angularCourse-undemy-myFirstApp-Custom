import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l101-bis',
  templateUrl: './l101-bis.component.html',
  styleUrls: ['./l101-bis.component.css']
})
export class L101BisComponent implements OnInit {

  showDrop000: boolean;
  showDrop001: boolean;

  constructor() { }

  ngOnInit() {
    this.showDrop000 = false;
    this.showDrop001 = false;
  }



}
