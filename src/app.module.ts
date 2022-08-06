import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PlanModule } from './plan/plan.module';
import { UsersModule } from './users/users.module';
import { PlansModule } from './plans/plans.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UserModule, PlanModule, UsersModule, PlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
