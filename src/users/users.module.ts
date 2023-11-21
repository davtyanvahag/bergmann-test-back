import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [UsersController],
  imports: [HttpModule],
  providers: [UsersService],
})
export class UsersModule {}
