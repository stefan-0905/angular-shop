import {Category} from './Category.model';
import {Brand} from './Brand.model';

export class Product {
  id: string;
  title: string;
  price: number;
  sizes: string[];
  image: string;
  category: Category;
  brand: Brand;

  constructor(id: string, title: string, price: number, sizes: string[], image: string, category: Category, brand: Brand) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.sizes = sizes;
    this.image = image;
    this.category = category;
    this.brand = brand;
  }
}
