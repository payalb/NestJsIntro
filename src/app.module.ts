import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, GraphQLModule.forRoot({autoSchemaFile: "schema.gql", driver: ApolloDriver, sortSchema: true}),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "postgres",
    entities: [User],
    logging: true,
    synchronize: true
  })
],
  providers: [AppService, AppController],
})
export class AppModule {}
