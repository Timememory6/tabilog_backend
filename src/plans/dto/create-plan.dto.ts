import { Place } from 'src/places/place.schema';
import { Route } from 'src/routes/route.schema';

export class CreatePlanDto {
  title: string;
  description: string;
  createdBy: string;
  places: Place[];
  routes: Route[];
}
