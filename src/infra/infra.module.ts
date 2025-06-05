import { Module } from '@nestjs/common';
import { PrismaModule } from './persistence/prisma/prisma.module';
import { PrismaListRepository } from './repositories/prisma-list-repository';
import { PrismaTaskRepository } from './repositories/prisma-task-respotory';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [
    {
      provide: 'ListRepositoryInterface',
      useClass: PrismaListRepository,
    },
    {
      provide: 'TaskRepositoryInterface',
      useClass: PrismaTaskRepository,
    },
  ],
  exports: ['ListRepositoryInterface', 'TaskRepositoryInterface'],
})
export class InfraModule {}
