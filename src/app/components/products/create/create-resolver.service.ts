import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Category} from '../../../models/main/Category.model';

@Injectable()
export class CreateResolverService implements Resolve<any> {

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> | Promise<Category[]> | Category[] {
    return this.http.get<Category[]>('http://localhost:8080/api/category');
  }
}
