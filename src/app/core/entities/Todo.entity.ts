import { Guid, guid } from '../../Guid';

export class TodoEntity {
  id: guid;
  text: string = "";
  done: boolean = false;

  constructor(text: string) {
    this.id = Guid.newGuid();
    this.text = text;
  }
}
