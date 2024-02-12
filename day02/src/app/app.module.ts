import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOneWayBindingComponent } from './components/OneWayBinding/check-one-way-binding/check-one-way-binding.component';
import { ChecTwoWayNormalComponent } from './components/TwoWayBinding/chec-two-way-normal/chec-two-way-normal.component';
import { ChecTwoWayUsingModuleComponent } from './components/TwoWayBinding/chec-two-way-using-module/chec-two-way-using-module.component';
import { FormsModule } from '@angular/forms';
import { CheckDirectivesComponent } from './components/Directives/check-directives/check-directives.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckOneWayBindingComponent,
    ChecTwoWayNormalComponent,
    ChecTwoWayUsingModuleComponent,
    CheckDirectivesComponent,
    TodosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
