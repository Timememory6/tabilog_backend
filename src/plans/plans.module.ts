import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleMapsModule } from 'src/google-maps/google-maps.module';
import { Plan, PlanSchema } from './plan.schema';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plan.name, schema: PlanSchema }]),
    GoogleMapsModule,
  ],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}
