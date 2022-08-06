import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Route, RouteSchema } from './route.schema';
import { RoutesService } from './routes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }]),
  ],
  providers: [RoutesService],
  exports: [RoutesService],
})
export class RoutesModule {}
