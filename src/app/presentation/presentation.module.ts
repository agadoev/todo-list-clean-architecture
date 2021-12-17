import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ShowTodoListPresenter } from '../core/use-cases';
import {TodoListPresenter} from "./todo-list/todo-list.presenter";

@NgModule({
  declarations: [
    TodoListComponent
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ShowTodoListPresenter, useClass: TodoListPresenter }
  ]
})
export class PresentationModule { }
