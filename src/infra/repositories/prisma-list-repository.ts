import { PrismaClient } from 'data/prisma';
import { list } from 'src/domain/entities/list.entity';
import {
  CreateListDTO,
  ListRepositoryInterface,
  UpdateListDTO,
} from 'src/domain/repositories/list-repository';

class PrismaListRepository implements ListRepositoryInterface {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<list[]> {
    return await this.prisma.list.findMany();
  }

  async findById(id: string): Promise<list | null> {
    return await this.prisma.list.findUnique({ where: { id } });
  }

  async create(data: CreateListDTO): Promise<list> {
    return await this.prisma.list.create({ data });
  }

  async update(id: string, data: UpdateListDTO): Promise<list> {
    return await this.prisma.list.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.list.delete({ where: { id } });
  }
}

export { PrismaListRepository };
