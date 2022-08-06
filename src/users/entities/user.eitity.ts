import { IsString } from 'class-validator';

export class UserEntity {
  @IsString()
  name: string;
}
