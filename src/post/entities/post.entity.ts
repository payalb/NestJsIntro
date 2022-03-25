import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  @Field(()=> Int)
  id: number
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Column()
  exampleField: number;

  @ManyToOne(()=> User, user => user.posts, {nullable: false, cascade: true} )
  @JoinColumn({name: "userId", referencedColumnName: "id"})
  @Field(()=> User, {nullable: true})
  user: User

  @Field(()=> Int)
  userId: number
}
