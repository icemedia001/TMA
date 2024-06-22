import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.model';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findById(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const newTask = new this.taskModel(createTaskDto);
        return newTask.save();
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
    }

    async delete(id: string): Promise<Task> {
        return this.taskModel.findByIdAndDelete(id).exec();
    }
}