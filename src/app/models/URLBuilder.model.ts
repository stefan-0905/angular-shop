import {Brand} from './main/Brand.model';
import {Category} from './main/Category.model';

export class URLBuilderModel {
  private url: string;

  constructor(base?: string) {
    this.url = base;
  }

  append(path: string): URLBuilderModel {
    this.url += path;
    return this;
  }

  setCategory(category: Category): URLBuilderModel {
    this.append('&category=' + category.name);
    return this;
  }

  setBrands(brands: Brand[]): URLBuilderModel {
    let brandsString = '';
    brands.forEach( (brand: Brand) => {
      if (brandsString !== '') {
        brandsString += ',';
      }
      brandsString += brand.title;
    });
    this.append('&brands=' + brandsString);
    return this;
  }

  setSizes(sizes: string[]): URLBuilderModel {
    let sizesString = '';
    sizes.forEach( (size: string) => {
      if (sizesString !== '') {
        sizesString += ',';
      }
      sizesString += size;
    });
    this.append('&sizes=' + sizesString);
    return this;
  }

  setPage(page: number): URLBuilderModel {
    this.append('&page=' + page);
    return this;
  }

  build(): string {
    return this.url;
  }

}
