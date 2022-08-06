import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { PlansModule } from './plans/plans.module';
import { PlanPlacesModule } from './plan-places/plan-places.module';

@Module({
  imports: [UsersModule, PlansModule, PlacesModule, PlanPlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
