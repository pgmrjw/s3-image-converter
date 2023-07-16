import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USERNAME,
} from './config';
import { PostImage } from './entity/PostImage';
import { Post } from './entity/Post';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: 5432,
  username: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  synchronize: true,
  logging: false,
  entities: [PostImage, Post],
  migrations: [],
  subscribers: [],
});
