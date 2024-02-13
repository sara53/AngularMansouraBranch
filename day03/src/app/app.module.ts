import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckAttributeDirComponent } from './components/Directives/check-attribute-dir.component';
import { LoginComponent } from './components/ComponentInteractions/login/login.component';
import { ContentComponent } from './components/ComponentInteractions/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckAttributeDirComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
