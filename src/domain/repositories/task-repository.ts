import { tasks } from '../entities/tasks.entity';
export type CreateTaskDTO = {
  name: string;
  listId: string;
};

export type UpdateTaskDTO = {
  name?: string;
  completed?: boolean;
};

export interface TaskRepositoryInterface {
  findAll(): Promise<tasks[]>;
  findById(id: string): Promise<tasks | null>;
  create(data: CreateTaskDTO): Promise<tasks>;
  update(id: string, data: UpdateTaskDTO): Promise<tasks | null>;
  delete(id: string): Promise<void>;
}
