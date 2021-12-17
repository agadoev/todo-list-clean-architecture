import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoRepositoryService} from "./repository/todo-repository.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TodoRepositoryService
  ]
})
export class DataModule { }
