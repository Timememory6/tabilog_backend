import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { PlanEntity } from './entities/plan.entity';

export type PlaceDocument = Document & PlanEntity & Plan;

@Schema({ timestamps: true })
export class Plan {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  createdBy: string;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
