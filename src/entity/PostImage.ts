import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Timestamp,
} from 'typeorm';
import { Post } from './Post';

@Entity('PostImage')
export class PostImage {
  @PrimaryColumn({ type: 'int', generated: true })
  id: number;

  @Column({ nullable: true, type: 'int', name: 'postId' })
  postId: number;

  @Column({ nullable: true, type: 'varchar' })
  url: string;

  @Column({ nullable: true, type: 'int' })
  order: number;

  // @Column({ nullable: true, type: 'int', name: 'widthDimension' })
  // widthDimension: number;

  // @Column({ nullable: true, type: 'int', name: 'heightDimension' })
  // heightDimension: number;

  // @Column({ nullable: true, type: 'json', name: 'cropLocation' })
  // cropLocation: any;

  // @Column({ nullable: true, type: 'timestamp', name: 'createdAt' })
  // createdAt: Timestamp;

  @ManyToOne(() => Post, (post) => post.postImages)
  @JoinColumn({
    name: 'postId',
    referencedColumnName: 'id',
  })
  post: Post;
}
