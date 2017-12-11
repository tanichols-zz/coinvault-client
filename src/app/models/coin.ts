import { Category } from './category';

export class Coin {
  name: string;
  year: number;
  image_link: string;
  description: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
