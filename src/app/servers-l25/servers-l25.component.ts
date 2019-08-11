import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-l25',
  templateUrl: './servers-l25.component.html',
  styleUrls: ['./servers-l25.component.css']
})
export class ServersL25Component implements OnInit {

  allowNewServer = false;

  constructor() {
    // each 2000 ms the allowNewSever will negate
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }



}
