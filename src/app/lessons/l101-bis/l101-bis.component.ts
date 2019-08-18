import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l101-bis',
  templateUrl: './l101-bis.component.html',
  styleUrls: ['./l101-bis.component.css']
})
export class L101BisComponent implements OnInit {

  show: boolean;

  constructor() { }

  ngOnInit() {
    this.show = false;
  }
  showDropdown(){
    this.show = !this.show;
  }


}
