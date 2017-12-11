import { Coin } from './coin';

export class Category {
  id: number;
  title: string;
  description: string;
  coins: Array<Coin>;
  createdAt: Date;
  updatedAt: Date;
}
