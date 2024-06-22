import { TaskService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    delete(id: string): Promise<Task>;
}
