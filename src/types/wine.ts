export interface Wine {
  id: string;
  name: string;
  region: string;
  winery: string;
  varietal: string;
  price: number;
  rating: number;
  description: string;
  story: string;
  imageUrl: string;
  type: 'red' | 'white' | 'rose' | 'sparkling';
  foodPairings: string[];
  tastingNotes: string[];
  isWineOfMonth?: boolean;
}

export interface WineFilter {
  type: string;
  region: string;
  priceRange: string;
}

export interface Region {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  image: string;
}