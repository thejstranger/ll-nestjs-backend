import { Injectable, Inject } from '@nestjs/common';
import { Character } from './interfaces/character.interface';

@Injectable()
export class CharService {
  private readonly characters: Character[] = [];

  create(character: Character) {
    this.characters.push(character);
  }

  findAll(): Character[] {
    return this.characters;
  }
}
