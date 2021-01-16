class OpeningTimes {
  days: string;
  opening: string;
  closing: string;
  closed: boolean;
}
export class Review {
  author: string;
  rating: number;
  reviewText: string;
}
export class Coords {
  coordinates: number[];
}

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
  reviews: Review[];
  coords: Coords;
  openingTimes: OpeningTimes[];
}



