import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan, PlanDocument } from './plan.schema';

@Injectable()
export class PlansService {
  constructor(@InjectModel(Plan.name) private planModel: Model<PlanDocument>) {}
  async create(createPlanDto: CreatePlanDto) {
    return await this.planModel.create(createPlanDto);
  }

  async find(id: string) {
    return await this.planModel.findById(id);
  }

  async findAll(userid: string) {
    return await this.planModel.find({ user: userid }).exec();
  }
}
