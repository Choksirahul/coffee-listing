export interface ICoffeeList {
  id: number;
  image: string;
  name: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}
