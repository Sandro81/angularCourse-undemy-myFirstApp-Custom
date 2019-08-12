import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Udemy Course from 06 to 18 Custom';
  name = 'My first App';
  randomVariable = 'SandoR';

  // Variable for the Section 5
  serverElements = [{type: 'server', name:'TestServer', content: 'Just a Test!'}];
  // -------------------------
}
