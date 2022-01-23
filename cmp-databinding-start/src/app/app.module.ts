import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { SeverElementComponent } from './sever-element/sever-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    SeverElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
