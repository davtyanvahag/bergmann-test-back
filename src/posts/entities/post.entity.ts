import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  body: string;
}
