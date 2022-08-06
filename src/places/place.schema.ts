import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { PlaceEntity } from './entities/place.entity';
export type PlaceDocument = Document & PlaceEntity & Place;

@Schema({ timestamps: true })
export class Place {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  description: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
