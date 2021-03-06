import { Module } from '@nestjs/common';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AzureStrategy } from './azure.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtStrategy, AzureStrategy],
})
export class AuthModule {}
