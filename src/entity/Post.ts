import {
  BeforeInsert,
  Column,
  DataSource,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  Timestamp,
} from 'typeorm';
import { PostImage } from './PostImage';

@Entity('Post')
export class Post {
  @PrimaryColumn({ type: 'int', generated: true })
  id: number;

  @Column({ nullable: true, type: 'int' })
  priority: number;

  @Column({ nullable: true, type: 'boolean', name: 'isHidden' })
  isHidden: boolean;

  @OneToMany(() => PostImage, (p: PostImage) => p.post)
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'postId',
  })
  postImages: PostImage[];
}
