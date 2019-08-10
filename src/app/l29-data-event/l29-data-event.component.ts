import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l29-data-event',
  templateUrl: './l29-data-event.component.html',
  styleUrls: ['./l29-data-event.component.css']
})
export class L29DataEventComponent implements OnInit {

  eventText = '';

  constructor() { }

  ngOnInit() {
  }

  onUpdateName(event: Event){
    this.eventText = (<HTMLInputElement>event.target).value;
  }

}
