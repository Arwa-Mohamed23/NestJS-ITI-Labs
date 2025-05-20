import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from './todo.type';

@Injectable()
export class TodoService {
  private todos: Todo[];

  constructor() {
    this.todos = [];
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: number): Todo {
    if (id < 0 || id >= this.todos.length) {
      throw new NotFoundException('Todo not found');
    }
    return this.todos[id];
  }

  addTodo(todo: Todo): string {
    this.todos.push(todo);
    return 'Todo added successfully!';
  }

  updateTodo(id: number, updateData: Partial<Todo>): string {
    if (id < 0 || id >= this.todos.length) {
      throw new NotFoundException('Todo not found');
    }
    this.todos[id] = { ...this.todos[id], ...updateData };
    return 'Todo updated successfully!';
  }

  deleteTodo(id: number): string {
    if (id < 0 || id >= this.todos.length) {
      throw new NotFoundException('Todo not found');
    }
    this.todos.splice(id, 1);
    return 'Todo deleted successfully!';
  }
}