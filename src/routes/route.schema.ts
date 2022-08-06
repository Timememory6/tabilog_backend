import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { RouteEntity } from './entities/route.entity';

export type RouteDocument = Document & RouteEntity & Route;

@Schema({ timestamps: true })
export class Route {
  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  distance: string;

  @Prop({ required: true })
  endAddress: string;

  @Prop({ required: true })
  startAddress: string;
}

export const RouteSchema = SchemaFactory.createForClass(Route);
