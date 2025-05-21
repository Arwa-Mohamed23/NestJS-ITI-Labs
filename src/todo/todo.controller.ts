import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.getTodo(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async addTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.addTodo(createTodoDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<void> {
    return this.todoService.deleteTodo(id);
  }
}