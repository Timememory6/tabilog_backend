import { Body, Controller, Get, Post } from '@nestjs/common';
import { GoogleMapsService } from 'src/google-maps/google-maps.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
  constructor(
    private readonly planService: PlansService,
    private readonly googleMapsService: GoogleMapsService,
  ) {}

  @Post()
  create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  findAll(@Body('userid') userid: string) {
    return this.planService.findAll(userid);
  }

  @Get('near')
  findNearBy() {
    return this.googleMapsService.getNearBy('渋谷駅', '寿司');
  }
}
