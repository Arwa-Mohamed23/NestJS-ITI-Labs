enum TodoStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export class Todo {
  task: string;
  status: TodoStatus;
}