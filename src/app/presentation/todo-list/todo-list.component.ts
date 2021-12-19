import { Component, OnInit } from '@angular/core';
import {GetAllUseCase, ShowTodoListPresenter} from "../../core/use-cases";
import {AddTodoUseCase} from "../../core/use-cases";
import {RemoveTodoUseCase} from "../../core/use-cases";
import {EditTodoUseCase} from "../../core/use-cases";
import {guid} from "../../Guid";
import {TodoEntity} from "../../core/entities";
import {TodoListViewModel} from "./todo-list.view-model";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {

  constructor(
    private readonly showAll: GetAllUseCase,
    private readonly addTodo: AddTodoUseCase,
    private readonly removeTodo: RemoveTodoUseCase,
    private readonly editTodo: EditTodoUseCase,
    public readonly presenter: ShowTodoListPresenter<TodoListViewModel>
  ) {
    presenter.reset();
  }

  async ngOnInit(): Promise<void> {

    await this.showAll.execute();
  }

  public async add() {
    await this.addTodo.execute();
  }

  public async edit(id: guid, todo: TodoEntity) {
    await this.editTodo.execute({ id, todo, onlyToggleDone: false })
  }

  public async setTodoState(id: guid, todo: TodoEntity) {
    await this.editTodo.execute({ id, todo, onlyToggleDone: true })
  }

  public async remove(id: guid) {
    await this.removeTodo.execute({ id });
  }

  public async getAll() {
    await this.showAll.execute();
  }
}
