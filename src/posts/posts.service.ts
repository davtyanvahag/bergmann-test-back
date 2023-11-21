import { Injectable, Logger } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);
  constructor(private httpService: HttpService) {}

  async create(createPostDto: CreatePostDto) {
    const { data } = await firstValueFrom(
      this.httpService
        .post<any>(`${process.env.API_URL}posts`, createPostDto)
        .pipe(
          map((res: any) => res),
          catchError((error: AxiosError) => {
            this.logger.error(error.response);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async findAll(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${process.env.API_URL}posts`).pipe(
        map((res: any) => res),
        catchError((error: AxiosError) => {
          this.logger.error(error.response);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async findOne(id: number) {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${process.env.API_URL}posts/${id}`).pipe(
        map((res: any) => res),
        catchError((error: AxiosError) => {
          this.logger.error(error.response);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const { data } = await firstValueFrom(
      this.httpService
        .patch<any>(`${process.env.API_URL}posts/${id}`, updatePostDto)
        .pipe(
          map((res: any) => res),
          catchError((error: AxiosError) => {
            this.logger.error(error.response);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async remove(id: number) {
    const { data } = await firstValueFrom(
      this.httpService.delete<any>(`${process.env.API_URL}posts/${id}`).pipe(
        map((res: any) => res),
        catchError((error: AxiosError) => {
          this.logger.error(error.response);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
