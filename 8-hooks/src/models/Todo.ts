export class Todo {
  done: boolean;
  id: number;

  constructor(public text: string) {
    this.id = Date.now();
    this.done = false;
  }
}
