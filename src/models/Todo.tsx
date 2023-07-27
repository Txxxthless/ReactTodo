export class Todo {
  constructor(
    public name: string,
    public created: Date,
    public category: string,
    public content: string,
    public dates: string
  ) {}
}
