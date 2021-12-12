


export class TodoEntity {
  id: string = "";
  text: string = "";
  done: boolean = false;

  constructor(text: string, done: boolean) {
    this.text = text;
    this.done = done;
  }
}
