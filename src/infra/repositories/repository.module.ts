import { Module } from '@nestjs/common';
import { PrismaClient } from 'data/prisma'; // Importa o PrismaClient do caminho correto
import { PrismaTaskRepository } from './prisma-task-respotory';
import { PrismaListRepository } from './prisma-list-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaClient,
    {
      provide: ListRepositoryInterface,
      useClass: PrismaListRepository,
    },
    {
      provide: TaskRepositoryInterface,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [ListRepositoryInterface, TaskRepositoryInterface],
})
export class PersistenceModule {}
