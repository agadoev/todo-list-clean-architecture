import {IUseCase} from "../arch";
import {InteractionService} from "../services";
import {TodoRepository} from "../repositories";
import {GetAllUseCase} from "./get-all.use-case";
import {TodoEntity} from "../entities";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AddTodoUseCase implements IUseCase<void, void> {
  public readonly presenter: void;

  constructor(
    private readonly interactionService: InteractionService,
    private readonly showAllUseCase: GetAllUseCase,
    private readonly repository: TodoRepository
  ) {}

  public async execute(request: void): Promise<void> {
    try {
      const text: string = await this.interactionService.enterString();
      if (text == null || text.trim() === '') {
        return;
      }
      const todo = new TodoEntity(text);
      await this.repository.add(todo);
      await this.showAllUseCase.execute();
    } catch (e) {
      console.error('');
      throw e;
    }
  }
}
