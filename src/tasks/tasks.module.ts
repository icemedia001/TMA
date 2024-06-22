// task-management-backend/src/tasks/task.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.model';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
    providers: [TaskService],
    controllers: [TaskController],
})
export class TaskModule {}
