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

  constructor(
    private readonly repository: TodoRepository,
    private readonly interaction: InteractionService,
    private readonly showAllUseCase: GetAllUseCase,
    public readonly presenter: void
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
