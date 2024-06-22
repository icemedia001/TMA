import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Task> {
        return this.taskService.findById(id);
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.create(createTaskDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Task> {
        return this.taskService.delete(id);
    }
}