import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l39-ngfor',
  templateUrl: './l39-ngfor.component.html',
  styleUrls: ['./l39-ngfor.component.css']
})
export class L39NgforComponent implements OnInit {

  fromArrayData = ['First data', 'Second Data', 'Third data'];

  constructor() { }

  ngOnInit() {
  }

}
