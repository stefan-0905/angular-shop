import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {MainContentData} from '../../../models/main/MainContentData.model';

@Injectable()
export class MainContentResolver implements Resolve<MainContentData> {

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<MainContentData> | Promise<MainContentData> | MainContentData {
    return this.http.get<MainContentData>('http://localhost:8080/home')
      .pipe(map((response) => {
      return response;
    }));
  }

}
