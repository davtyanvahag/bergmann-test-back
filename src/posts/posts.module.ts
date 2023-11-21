import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [PostsController],
  imports: [HttpModule],
  providers: [PostsService],
})
export class PostsModule {}
