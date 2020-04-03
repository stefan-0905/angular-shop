import {Category} from './Category.model';
import {Brand} from './Brand.model';
import {Product} from './Product.model';

export interface MainContentData {
  categories: Category[];
  brands: Brand[];
  products: Product[];
}
