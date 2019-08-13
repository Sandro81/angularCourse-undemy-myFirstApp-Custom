import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  //With EventEmitter object, now we get two event emitters and that's the first step, eventEmitter is an object in the Angular framework which allows you to emit your own events
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  //we need two method that will called the serverCreated and the blueprintCreated with the emit() method. This will emit a new event of this type so of the server created using this evetEmitter
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
