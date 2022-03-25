import { ApolloDriver } from '@nestjs/apollo';
import { Get, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AwsserviceService } from './awsservice/awsservice.service';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { LoggerMiddleware } from './utils/logging/logger.middleware';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [UserModule, GraphQLModule.forRoot({autoSchemaFile: "schema.gql", driver: ApolloDriver, sortSchema: true}),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "postgres",
    entities: [User, Post], 
    logging: true,
    synchronize: true
  }),
  PostModule
],
  providers: [AppService, AppController, AwsserviceService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/graphql")
  
  }
}
