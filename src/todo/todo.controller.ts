import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { TodoService } from './todo.service';
  import { Todo } from './todo.type';
  
  @Controller('todo')
  export class TodoController {
    constructor(private todoService: TodoService) {}
  
    @Get()
    getAll(): Todo[] {
      return this.todoService.getTodos();
    }
  
    @Get(':id')
    getById(@Param('id') id: number): Todo {
      return this.todoService.getTodo(+id);
    }
  
    @Post()
    addTodo(@Body() todo: Todo) {
      return this.todoService.addTodo(todo);
    }
  
    @Patch(':id')
    updateTodo(@Param('id') id: number, @Body() updateData: Partial<Todo>) {
      return this.todoService.updateTodo(+id, updateData);
    }
  
    @Delete(':id')
    deleteTodo(@Param('id') id: number) {
      return this.todoService.deleteTodo(+id);
    }
  }