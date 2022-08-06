import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserEntity } from './entities/user.entity';

export type UserDocument = Document & UserEntity & User;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
