import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.model';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<TaskDocument>);
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    delete(id: string): Promise<Task>;
}
