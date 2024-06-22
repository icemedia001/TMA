export class CreateTaskDto {
  title: string;
  dueDate: Date;
  description?: string;
}

export class UpdateTaskDto {
  title?: string;
  dueDate?: Date;
  description?: string;
}