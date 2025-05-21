import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TodoStatus } from '../schemas/todo.schema';

export class CreateTodoDto {
  @IsString()
  task: string;

  @IsOptional()
  @IsEnum(TodoStatus)
  status?: TodoStatus;
}