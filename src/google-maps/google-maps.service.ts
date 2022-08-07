import {
  Client,
  LatLngLiteral,
  PlacesNearbyRanking,
} from '@googlemaps/google-maps-services-js';
import { placesNearby } from '@googlemaps/google-maps-services-js/dist/places/placesnearby';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleMapsService extends Client {
  private readonly accessKey = '';
  async getCoordinates(address: {
    street: string;
    number: string;
    city: string;
    state: string;
    postalCode: string;
  }): Promise<LatLngLiteral> {
    const googleRes = await this.geocode({
      params: {
        address: `${address.street}, ${address.number}, ${address.city}, ${address.state}, ${address.postalCode}`,
        key: this.accessKey,
      },
    });

    const { lng, lat } = googleRes.data.results[0].geometry.location;
    return { lng, lat };
  }

  async getAddressCoords(address): Promise<LatLngLiteral> {
    const { lng, lat } = await this.getCoordinates(address);

    return { lng, lat };
  }

  async getNearBy(address: any, key: string) {
    const pos = this.getAddressCoords(address);
    const params = {
      location: { lat: (await pos).lat, lng: (await pos).lng },
      key: key,
      ranking: PlacesNearbyRanking.distance,
    };
    return await placesNearby({ params: params });
  }
}
