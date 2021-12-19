import {TodoEntity} from "../entities";
import {IUseCase} from "../arch";
import {Injectable} from "@angular/core";
import {InteractionService} from "../services";
import {TodoRepository} from "../repositories";
import {GetAllUseCase} from "./get-all.use-case";
import {guid} from "../../Guid";


export class EditTodoRequest {
  constructor(
    public readonly id: guid,
    public readonly todo: TodoEntity,
    public readonly onlyToggleDone: boolean = false
  ) {
  }
}

@Injectable({ providedIn: 'root' })
export class EditTodoUseCase implements IUseCase<EditTodoRequest, any> {

  public readonly presenter: void;

  constructor(
    private readonly interaction: InteractionService,
    private readonly showListUseCase: GetAllUseCase,
    private readonly repository: TodoRepository
  ) {}

  public async execute(request: EditTodoRequest): Promise<void> {

    try {
      const todo = new TodoEntity(request.todo.text);
      if (request.onlyToggleDone) {
        todo.done = !todo.done;
      } else {
        do {
          todo.text = await this.interaction.enterString(todo.text);
          if (todo.text == null) {
            return;
          }
        } while (todo.text.trim() == '')
      }

      await this.repository.update(request.id, todo);

      await this.showListUseCase.execute();
    } catch (e) {
      console.error(e);
      throw (e);
    }
  }
}
