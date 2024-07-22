import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dtos/create-item.dto';
import { Item } from './entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.itemService.remove(+id);
  }
}
