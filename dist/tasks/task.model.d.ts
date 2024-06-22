import { Document } from 'mongoose';
export type TaskDocument = Task & Document;
export declare class Task {
    title: string;
    dueDate: Date;
    isComplete: boolean;
    description: string;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, Document<unknown, any, Task> & Task & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, Document<unknown, {}, import("mongoose").FlatRecord<Task>> & import("mongoose").FlatRecord<Task> & {
    _id: import("mongoose").Types.ObjectId;
}>;
