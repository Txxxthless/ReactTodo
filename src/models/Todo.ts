import { v4 as uuidv4 } from "uuid";

export class Todo {
  public id: string;

  constructor(
    public name: string,
    public created: Date,
    public category: string,
    public content: string,
    public dates: string
  ) {
    this.id = uuidv4();
  }
}
