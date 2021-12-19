import {TodoRepository} from "../../core/repositories";
import {Injectable} from "@angular/core";
import {TodoEntity} from "../../core/entities";
import {guid} from "../../Guid";

@Injectable({ providedIn: 'root' })
export class TodoRepositoryService extends TodoRepository {

  private todos: TodoEntity[] = [];

  public async add(todo: TodoEntity): Promise<TodoEntity> {
    this.todos.push(todo);
    return this.todos[this.todos.length - 1];
  }

  public async getAll(): Promise<TodoEntity[]> {
    return this.todos;
  }

  public async remove(id: guid): Promise<void> {
    const index = this.todos.findIndex(t => t.id == id);
    if (index === -1) {
      throw new Error('not found');
    }

    this.todos.splice(index, 1);
  }

  public async update(id: guid, _new: TodoEntity): Promise<TodoEntity> {
    const index = this.todos.findIndex(t => t.id == id);
    this.todos[index] = _new;
    return this.todos[index];
  }
}
