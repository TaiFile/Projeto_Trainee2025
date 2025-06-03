import { PrismaClient } from 'data/prisma';
import { tasks } from 'src/domain/entities/tasks.entity';
import {
  CreateTaskDTO,
  TaskRepositoryInterface,
  UpdateTaskDTO,
} from 'src/domain/repositories/task-repository';

class PrismaTaskRepository implements TaskRepositoryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<tasks[]> {
    return this.prisma.task.findMany();
  }

  findById(id: string): Promise<tasks | null> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async create(data: CreateTaskDTO): Promise<tasks> {
    return this.prisma.task.create({
      data: {
        name: data.name,
        listId: data.listId,
        completed: false,
      },
    });
  }

  async update(id: string, data: UpdateTaskDTO): Promise<tasks | null> {
    return this.prisma.task.update({
      where: { id },
      data: {
        name: data.name,
        completed: data.completed,
      },
    });
  }

  async delete(id: string): Promise<void> {
    return this.prisma.task.delete({ where: { id } }).then(() => {});
  }
}

export { PrismaTaskRepository };
