import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(()=> ID, {nullable: true})
  id: number
  @Field(() => Int, { description: 'Example field (placeholder)' , nullable: true})
  exampleField: number;
}
