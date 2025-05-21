import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TodoStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  task: string;

  @Prop({ enum: TodoStatus, default: TodoStatus.TODO })
  status: TodoStatus;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);