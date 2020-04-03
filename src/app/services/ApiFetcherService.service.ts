import {Category} from '../models/main/Category.model';
import {Injectable} from '@angular/core';
import {Product} from '../models/main/Product.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Brand} from '../models/main/Brand.model';
import {URLBuilderModel} from '../models/URLBuilder.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationService} from './security/Authentication.service';

@Injectable()
export class ApiFetcherServiceService {

  constructor(private http: HttpClient) {
  }

  filterPaged(category: Category, brands: Brand[], sizes: string[], priceRange: { startValue: number, endValue: number }, page?: number)
    : Observable<{content: Product[], canLoadMore: boolean}> {
    const url = new URLBuilderModel('http://localhost:8080/api/product/filter');

    let httpParams = new HttpParams();

    if (category.name !== '') {
      httpParams = httpParams.append('category', category.name);
    }

    if (brands.length > 0) {
      httpParams = httpParams.append('brands', brands.map(b => b.title).join());
    }

    if (sizes.length > 0) {
      httpParams = httpParams.append('sizes', sizes.join());
    }

    if (priceRange) {
      httpParams = httpParams.append('between', priceRange.startValue + ',' + priceRange.endValue);
    }

    if (page != null) {
      httpParams = httpParams.append('page', page.toString());
    }

    return this.http.get<{content: Product[], totalPages: number, number: number}>(url.build(), {
        params: httpParams
      })
      .pipe(map( (data: {content: Product[], totalPages: number, number: number}) => {
        const canLoadMore = (data.totalPages - 1) !== data.number;
        return {content: data.content, canLoadMore};
      }));
  }
}
