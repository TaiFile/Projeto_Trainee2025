import { list } from '../entities/list.entity';

export type CreateListDTO = {
  name: string;
  description?: string;
};
export type UpdateListDTO = {
  name?: string;
  description?: string;
};

export interface ListRepositoryInterface {
  findAll(): Promise<list[]>;
  findById(id: string): Promise<list | null>;
  create(data: CreateListDTO): Promise<list>;
  update(id: string, data: UpdateListDTO): Promise<list | null>;
  delete(id: string): Promise<void>;
}
