

export abstract class Presenter<TView> {
    public viewModel: TView;

    protected constructor(private template: new() => TView) {

    }

    public reset() {
        const model = new this.template();

        if (this.viewModel == null) {
            this.viewModel = model;
        } else {
            Object.assign(this.viewModel, model);
        }
    }
}
