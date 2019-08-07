import { Module } from '@nestjs/common';
import { CharService } from './character.service';
import { CharController } from './character.controller';

@Module({
  controllers: [CharController],
  providers: [CharService],
})
export class CharModule {}
