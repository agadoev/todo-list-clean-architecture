import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoRepositoryService} from "./repository/todo-repository.service";
import { TodoRepository } from '../core/repositories';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: TodoRepository, useClass: TodoRepositoryService }
  ]
})
export class DataModule { }
