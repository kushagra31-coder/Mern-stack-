export interface Dish {
  id: string;
  name: string;
  cuisine: string;
  price: number;
  tags: string[];
  available: boolean;
}