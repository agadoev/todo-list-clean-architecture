import { TodoEntity } from '../entities';
import { guid } from "../../Guid";

export interface TodoRepository {
  add(todo: TodoEntity): Promise<TodoEntity>;

  remove(id: guid): Promise<void>;

  getAll(): Promise<TodoEntity[]>;

  update(id: guid, _new: TodoEntity): Promise<TodoEntity>;
}
