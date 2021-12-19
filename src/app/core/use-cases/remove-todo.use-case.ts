import {IUseCase} from "../arch";
import {guid} from "../../Guid";
import {TodoRepository} from "../repositories";
import {InteractionService} from "../services";
import {GetAllUseCase} from "./get-all.use-case";
import {Injectable} from "@angular/core";

export class RemoveTodoRequest {
  constructor(
    public id: guid
  ) {}
}

@Injectable({ providedIn: 'root' })
export class RemoveTodoUseCase implements IUseCase<RemoveTodoRequest, void> {

  public readonly  presenter: void;

  constructor(
    private readonly interaction: InteractionService,
    private readonly showAllUseCase: GetAllUseCase,
    private readonly repository: TodoRepository
  ) {
  }

  public async execute(request: RemoveTodoRequest): Promise<void> {
    try {
      await this.repository.remove(request.id);
      await this.showAllUseCase.execute();
    } catch (e) {
      console.error(e);
      throw(e);
    }
  }
}
