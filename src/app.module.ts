import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { PlansModule } from './plans/plans.module';
import { PlanPlacesModule } from './plan-places/plan-places.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://tabilog_backend_mongodb_1:27017/tabilog'),
    UsersModule,
    PlansModule,
    PlacesModule,
    PlanPlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
