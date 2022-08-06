import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserEntity } from './entities/user.eitity';

export type UserDocument = Document & UserEntity & User;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
