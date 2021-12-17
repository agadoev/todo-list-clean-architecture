import {IUseCase, Presenter} from "../arch";
import {TodoEntity} from "../entities";
import {TodoRepository} from "../repositories";
import {Injectable} from "@angular/core";

export abstract class ShowTodoListPresenter<T> extends Presenter<T> {
    public abstract displayTodos(todos: TodoEntity[]): void;
}

@Injectable({ providedIn: 'root' })
export class GetAllUseCase implements IUseCase<void, ShowTodoListPresenter<any>> {
    public readonly presenter: ShowTodoListPresenter<any>;
    private readonly repository: TodoRepository;
    constructor() {}

    public async execute(request: void): Promise<void> {
        try {
            const allTodos = await this.repository.getAll();
            this.presenter.displayTodos(allTodos);
        } catch (e) {
            console.error('Failed to load or present to dos: %o', e)
            throw e;
        }
    }
}
