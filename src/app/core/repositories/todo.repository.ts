import { TodoEntity } from '../entities';
import { guid } from "../../Guid";

export abstract class TodoRepository {
  public abstract add(todo: TodoEntity): Promise<TodoEntity>;

  public abstract remove(id: guid): Promise<void>;

  public abstract getAll(): Promise<TodoEntity[]>;

  public abstract update(id: guid, _new: TodoEntity): Promise<TodoEntity>;
}
