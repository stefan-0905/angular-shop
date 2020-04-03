import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  constructor(private http: HttpClient) {
  }

  store(data: FormData): Observable<any> {
    return this.http.post('http://localhost:8080/api/product', data, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
