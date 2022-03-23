import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field(()=> ID)
  @PrimaryGeneratedColumn()
  id: number
  @Column({nullable: true})
  @Field(() => Int, { description: 'Example field (placeholder)' , nullable: true})
  exampleField?: number;
}
