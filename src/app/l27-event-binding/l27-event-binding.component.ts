import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l27-event-binding',
  templateUrl: './l27-event-binding.component.html',
  styleUrls: ['./l27-event-binding.component.css']
})
export class L27EventBindingComponent implements OnInit {

  testEventBinding = 'The button wasn\'t clicked!';

  constructor() { }

  ngOnInit() {
  }

  eventTriggered(){
    this.testEventBinding = 'Te button event was triggered!'
  }

}
