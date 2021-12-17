import {ShowTodoListPresenter} from "../../core/use-cases/get-all.use-case";
import {TodoListViewModel} from "./todo-list.view-model";
import {TodoEntity} from "../../core/entities";


export class TodoListPresenter extends ShowTodoListPresenter<TodoListViewModel> {
  constructor() {
    super(TodoListViewModel);
  }

  override displayTodos(todos: TodoEntity[]): void {
    this.viewModel.todos = todos;
  }
}
