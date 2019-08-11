import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServersL19Component } from './servers-l19/servers-l19.component';
import { ServerL24Component } from './server-l24/server-l24.component';
import { ServersL25Component } from './servers-l25/servers-l25.component';
import { L27EventBindingComponent } from './l27-event-binding/l27-event-binding.component';
import { L29DataEventComponent } from './l29-data-event/l29-data-event.component';
import { L30TwoWayDatabindingComponent } from './l30-two-way-databinding/l30-two-way-databinding.component';
import { L33AssignmentComponent } from './l33-assignment/l33-assignment.component';
import { L35DirectiveNgifOutputComponent } from './l35-directive-ngif-output/l35-directive-ngif-output.component';
import { L36DirectiveNgifElseComponent } from './l36-directive-ngif-else/l36-directive-ngif-else.component';
import { L37NgstyleComponent } from './l37-ngstyle/l37-ngstyle.component';
import { L38NgclassComponent } from './l38-ngclass/l38-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServersL19Component,
    ServerL24Component,
    ServersL25Component,
    L27EventBindingComponent,
    L29DataEventComponent,
    L30TwoWayDatabindingComponent,
    L33AssignmentComponent,
    L35DirectiveNgifOutputComponent,
    L36DirectiveNgifElseComponent,
    L37NgstyleComponent,
    L38NgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
