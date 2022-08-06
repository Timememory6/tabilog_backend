import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Place } from 'src/places/place.schema';
import { Plan } from 'src/plans/plan.schema';
import { PlanPlaceEntity } from './entities/plan-place.entity';

export type TeamMemberDocument = Document & PlanPlace & PlanPlaceEntity;

@Schema({ timestamps: true })
export class PlanPlace {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Plan' })
  team: Plan;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  place: Place;
}

export const PlanPlaceSchema = SchemaFactory.createForClass(PlanPlace);
