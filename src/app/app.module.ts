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
import { L39NgforComponent } from './l39-ngfor/l39-ngfor.component';
import { L40AssignmentComponent } from './l40-assignment/l40-assignment.component';
import { HeaderComponent } from './recipe/header/header/header.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeListComponent } from './recipe/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './recipe/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipe/shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';
import { L75NgcomponentComponent } from './lessons/l75-ngcomponent/l75-ngcomponent.component';
import { L77LifecycleComponent } from './lessons/l77-lifecycle/l77-lifecycle.component';
import { GamecontrolComponent } from './section5/assignment4/gamecontrol/gamecontrol.component';
import { OddComponent } from './section5/assignment4/odd/odd.component';
import { EvenComponent } from './section5/assignment4/even/even.component';
import { S6HeaderComponent } from './section6/s6-header/s6-header.component';
import { S6RecipesComponent } from './section6/s6-recipes/s6-recipes.component';
import { S6RecipeDetailComponent } from './section6/s6-recipes/s6-recipe-detail/s6-recipe-detail.component';
import { S6RecipeListComponent } from './section6/s6-recipes/s6-recipe-list/s6-recipe-list.component';
import { S6ShoppingListComponent } from './section6/s6-shopping-list/s6-shopping-list.component';
import { S6ShoppingEditComponent } from './section6/s6-shopping-list/s6-shopping-edit/s6-shopping-edit.component';
import { S6RecipeItemComponent } from './section6/s6-recipes/s6-recipe-list/s6-recipe-item/s6-recipe-item.component';
import { L90NgForAndNgIfComponent } from './lessons/l90-ng-for-and-ng-if/l90-ng-for-and-ng-if.component';
import { GetGitsComponent } from './get-gits/get-gits.component';
import { L91NgClassNgStyleRecapComponent } from './lessons/l91-ng-class-ng-style-recap/l91-ng-class-ng-style-recap.component';
import {BasicHighlightDirective} from "./directive/basic-highlight/basic-highlight-directive";
import {BetterHighlightDirective} from "./directive/better-highlight/better-highlight.directive";
import { HighlightHostlistenerDirective } from './directive/highlightHostlistener/highlight-hostlistener.directive';
import {HighlightHostbindingDirective} from "./directive/highlight-hostbinding/highlight-hostbinding.directive";
import { HighlightHostlistenerBindingDirective } from './directive/highlightHostlistenerBinding/highlight-hostlistener-binding.directive';
import { UnlessDirective } from './directive/unless/unless.directive';
import { L99BuildingStructuralDirectiveComponent } from './lessons/l99-building-structural-directive/l99-building-structural-directive.component';
import { L100NgSwitchComponent } from './lessons/l100-ng-switch/l100-ng-switch.component';
import { DropdownDirective } from './directive/dropdown/dropdown.directive';
import { L101DropdownDirectiveComponent } from './lessons/l101-dropdown-directive/l101-dropdown-directive.component';
import { L101BisComponent } from './lessons/l101-bis/l101-bis.component';
import { L105AccountComponent } from './lessons/l105-account/l105-account.component';
import { L105NewAccountComponent } from './lessons/l105-new-account/l105-new-account.component';
import {AccountService} from "./services/account.service";
import {LoggingService} from "./services/logging.service";
import { L112InactiveUsersComponent } from './lessons/l112-inactive-users/l112-inactive-users.component';
import { L112ActiveUsersComponent } from './lessons/l112-active-users/l112-active-users.component';
import {UsersService} from './services/users.service';
import {CounterService} from './services/counter.service';
import { S9HeaderComponent } from './section9/s9-header/s9-header.component';
import { S9RecipesComponent } from './section9/s9-recipes/s9-recipes.component';
import { S9ShoppingListComponent } from './section9/s9-shopping-list/s9-shopping-list.component';
import { S9RecipeDetailComponent } from './section9/s9-recipes/s9-recipe-detail/s9-recipe-detail.component';
import { S9RecipeListComponent } from './section9/s9-recipes/s9-recipe-list/s9-recipe-list.component';
import { S9RecipeItemComponent } from './section9/s9-recipes/s9-recipe-list/s9-recipe-item/s9-recipe-item.component';
import { S9ShoppingEditComponent } from './section9/s9-shopping-list/s9-shopping-edit/s9-shopping-edit.component';
import {ShoppingListService} from './section9/s9-shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    BasicHighlightDirective,
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
    L38NgclassComponent,
    L39NgforComponent,
    L40AssignmentComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    L75NgcomponentComponent,
    L77LifecycleComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    S6HeaderComponent,
    S6RecipesComponent,
    S6RecipeDetailComponent,
    S6RecipeListComponent,
    S6ShoppingListComponent,
    S6ShoppingEditComponent,
    S6RecipeItemComponent,
    L90NgForAndNgIfComponent,
    GetGitsComponent,
    L91NgClassNgStyleRecapComponent,
    BetterHighlightDirective,
    HighlightHostlistenerDirective,
    HighlightHostbindingDirective,
    HighlightHostlistenerBindingDirective,
    UnlessDirective,
    L99BuildingStructuralDirectiveComponent,
    L100NgSwitchComponent,
    DropdownDirective,
    L101DropdownDirectiveComponent,
    L101BisComponent,
    L105AccountComponent,
    L105NewAccountComponent,
    L112InactiveUsersComponent,
    L112ActiveUsersComponent,
    S9HeaderComponent,
    S9RecipesComponent,
    S9ShoppingListComponent,
    S9RecipeDetailComponent,
    S9RecipeListComponent,
    S9RecipeItemComponent,
    S9ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [AccountService, LoggingService, UsersService, CounterService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
