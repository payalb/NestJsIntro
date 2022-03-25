import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field(()=> ID)
  @PrimaryGeneratedColumn()
  id: number
  @Column({nullable: true})
  @Field(() => Int, { description: 'Example field (placeholder)' , nullable: true})
  exampleField: number;
  @Field(()=> Post)
  @OneToMany(()=> Post, post => post.user)
  posts: Post[]
}
