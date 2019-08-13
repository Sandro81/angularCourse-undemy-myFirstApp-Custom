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



// Those two method are created for cockpit component ------------
  onAddServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverName
    });
    console.log(this.serverElements);
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverName
    });
  }
  // -------------- End cockpit component
}
