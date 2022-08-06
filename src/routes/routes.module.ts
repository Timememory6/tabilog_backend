import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Plan, PlanSchema } from './plan.schema';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { Route, RouteSchema } from './route.schema';
import { RoutesService } from './routes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }]),
  ],
  providers: [RoutesService],
  exports: [RoutesService]
})
export class PlansModule {}
