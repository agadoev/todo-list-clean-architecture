import { Component, OnInit } from '@angular/core';
import {GetAllUseCase} from "../../core/use-cases/get-all.use-case";
import {AddTodoUseCase} from "../../core/use-cases/add-todo.use-case";
import {RemoveTodoUseCase} from "../../core/use-cases/remove-todo.use-case";
import {EditTodoUseCase} from "../../core/use-cases/edit-todo.use-case";
import {guid} from "../../Guid";
import {TodoEntity} from "../../core/entities";
import {TodoListPresenter} from "./todo-list.presenter";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  constructor(
    private readonly showAll: GetAllUseCase,
    private readonly addTodo: AddTodoUseCase,
    private readonly removeTodo: RemoveTodoUseCase,
    private readonly editTodo: EditTodoUseCase,
    public readonly presenter: TodoListPresenter
  ) {}

  async ngOnInit(): Promise<void> {
    this.presenter.reset();
    await this.showAll.execute();
  }

  public async add() {
    await this.addTodo.execute();
  }

  public async edit(id: guid, todo: TodoEntity) {
    await this.editTodo.execute({ id, todo, onlyToggleDone: false })
  }

  public async remove(id: guid) {
    await this.removeTodo.execute({ id });
  }

  public async getAll() {
    await this.showAll.execute();
  }
}
