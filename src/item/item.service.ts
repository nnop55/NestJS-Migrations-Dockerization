import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dtos/create-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemsRepository.create(createItemDto);
    return await this.itemsRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemsRepository.find();
  }

  async findOne(id: number): Promise<Item> {
    try {
      return await this.itemsRepository.findOneBy({ id });
    } catch (error) {
      throw new HttpException(
        `Item with id: ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.itemsRepository.delete(id);
    } catch (error) {
      throw new HttpException(
        `Item with id: ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
