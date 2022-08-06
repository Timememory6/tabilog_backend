import { IsString } from 'class-validator';

export class PlanEntity {
  @IsString()
  title: string;
  @IsString()
  description: string;
}
