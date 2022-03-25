import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor( @InjectRepository(Post) private readonly postRepo: Repository<Post>, private readonly userService: UserService){

  }
  /*
  mutation{
    createPost(createPostInput: {
        exampleField: 1,
        user: {
            id: 3
        }
    }){
        id
    }
}
*/
  async create(createPostInput: CreatePostInput) {
    //save the user ; user id -> save Post
    let user = await this.userService.create(createPostInput.user);
    createPostInput.user= user
    return this.postRepo.save(createPostInput);
  }

  /*
query{
    posts{
        id
        exampleField
        user{
            id
            exampleField
        }
    }
}
  */
  async findAll() {
    return this.postRepo.find({relations: ["user"]}); //also retrieve user info??
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
