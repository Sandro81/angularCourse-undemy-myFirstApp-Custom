import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-s9-header',
  templateUrl: './s9-header.component.html',
  styleUrls: ['./s9-header.component.css']
})
export class S9HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // We have to attach something to this property to make it listenable from the parent component, @Output decorator.
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    // I want to use this property which now holds this event emitter as a value to emit an event whenever we click one of the buttons and I will then emit feature,
    this.featureSelected.emit(feature);
  }

}
