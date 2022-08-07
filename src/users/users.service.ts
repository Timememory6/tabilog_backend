import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(user: CreateUserDto) {
    const createUser = new this.userModel({
      name: user.name,
    });
    return await createUser.save();
  }

  findAll() {
    console.log(this.userModel.find().exec());
    return this.userModel.find().exec();
  }

  async findOne(id: number) {
    return await this.userModel.findById(id.toExponential).exec();
  }
}
