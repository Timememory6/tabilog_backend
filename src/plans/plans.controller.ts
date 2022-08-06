import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
  constructor(private readonly planService: PlansService) {}

  @Post()
  create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  findAll(@Body('userid') userid: string) {
    return this.planService.findAll(userid);
  }
}
