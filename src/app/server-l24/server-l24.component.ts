import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-l24',
  templateUrl: './server-l24.component.html',
  styleUrls: ['./server-l24.component.css']
})
export class ServerL24Component implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

}
