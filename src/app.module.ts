import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';
import { PlansModule } from './plans/plans.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://tabilog_backend_mongodb_1:27017/tabilog'),
    GoogleMapsModule,
    UsersModule,
    PlansModule,
    PlacesModule,
    RoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
