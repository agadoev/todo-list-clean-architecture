import { TodoEntity } from './entities/Todo.entity';


export interface ITodoRepository {
  add(todo: TodoEntity): any;

  remove(todo: TodoEntity): any;

  getAll(): TodoEntity[];

  update(todo: TodoEntity, _new: TodoEntity): any;
}
