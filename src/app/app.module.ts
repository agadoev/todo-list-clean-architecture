import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DataModule} from "./data/data.module";
import {InfrastructureModule} from "./infrastructure/infrastructure.module";
import {PresentationModule} from "./presentation/presentation.module";
import {TodoListComponent} from "./presentation/todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    InfrastructureModule,
    PresentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
