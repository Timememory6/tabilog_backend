import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanPlace, PlanPlaceSchema } from './plan-place.schema';
import { PlanPlacesService } from './plan-places.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlanPlace.name, schema: PlanPlaceSchema },
    ]),
  ],
  providers: [PlanPlacesService],
  exports: [PlanPlacesService],
})
export class PlanPlacesModule {}
