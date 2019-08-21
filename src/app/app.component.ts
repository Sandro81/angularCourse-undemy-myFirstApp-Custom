import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Udemy Course from 06 to 18 Custom';
  name = 'My first App';
  randomVariable = 'SandoR';

  // Variable for the Section 5
  serverElements = [{type: 'server', name:'TestServer', content: 'Just a Test!'}];
  // -------------------------


  // Lesson 74
  @ViewChild('reference74', {static: true}) reference74: ElementRef;
  reference74Out = '';
  clickOnButton($event){
    console.log(this.reference74.nativeElement.value);
    this.reference74Out = this.reference74.nativeElement.value;
  }
 // reference74Out = this.reference74.nativeElement.value;
  //----------

  // Lesson 75 -> Projecting Content into Components with ng-content
  status75: boolean = false;

  changeStatus75(){
    this.status75 = !this.status75;
  }

  //-----------------------------------------


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

  // Lesson 77 --->
  varTestChanges: number = 0;


  incrementValue(){
    this.varTestChanges++;
  }
// ......

 // Lesson 82 Assignment 4 ---->
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onItervalFired(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  //................

  // Section 6


  loadedFeature = 'recipe';

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
  //......................



}
