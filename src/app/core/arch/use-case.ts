
export interface IUseCase<TRequest, TPresenter> {
    readonly presenter: TPresenter | void;

    execute(request: TRequest): Promise<void>;
}
