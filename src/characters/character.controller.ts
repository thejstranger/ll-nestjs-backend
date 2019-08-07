import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { CreateCharDto } from './dto/create.character.dto';
import { CharService } from './character.service';
import { Character } from './interfaces/character.interface';

@Controller()
export class CharController {
  constructor(private readonly charService: CharService) {}

  @Post()
  async create(@Body() createCharDto: CreateCharDto) {
    this.charService.create(createCharDto);
  }

  @Get()
  async findAll(): Promise<Character[]> {
    return this.charService.findAll();
  }
}
