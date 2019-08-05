import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharController } from './characters/character.controller';
import { CharService } from './characters/character.service';

@Module({
  imports: [],
  controllers: [AppController, CharController],
  providers: [AppService, CharService],
})
export class AppModule {}
