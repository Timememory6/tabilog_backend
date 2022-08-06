import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Place, PlaceSchema } from 'src/places/place.schema';
import { Route, RouteSchema } from 'src/routes/route.schema';
import { PlanEntity } from './entities/plan.entity';

export type PlanDocument = Document & PlanEntity & Plan;

@Schema({ timestamps: true })
export class Plan {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  createdBy: string;

  @Prop({ required: false, type: [PlaceSchema], default: () => [] })
  places: Place[];

  @Prop({ required: false, type: [RouteSchema], default: () => [] })
  routes: Route[];
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
