import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){

  }
  async create(createUserInput: CreateUserInput) {
    console.log("User input is **********"+ JSON.stringify(createUserInput))
    return this.userRepo.save(createUserInput) //@TODO not working
  }

  findAll() {
    return this.userRepo.find({});
  }

  async findOne(id: number) {
    return this.userRepo.findOne({id}).then((data)=> {
      console.log("data is "+ JSON.stringify(data))
      if(!data){
        throw new HttpException("No user found", HttpStatus.NO_CONTENT);
      }else{
        return data;
      }
    })
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
