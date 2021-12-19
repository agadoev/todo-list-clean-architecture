import { Guid, guid } from '../../Guid';

export class TodoEntity {
  id: guid;
  text: string = "";
  done: boolean;

  constructor(text: string, done?: boolean) {
    this.id = Guid.newGuid();
    this.text = text;
    this.done = done ?? false;
  }
}
