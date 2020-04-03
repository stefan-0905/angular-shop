import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../../models/main/User.model';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private user: User = null;
  private automaticLogoutTimer: any = null;

  constructor(private http: HttpClient, private router: Router) {
    const savedUser: User = JSON.parse(localStorage.getItem('user'));
    if (savedUser !== null) {
      this.user = new User(savedUser.username, savedUser.password, savedUser.token, moment(savedUser.tokenExpirationDate).toDate());
    }
  }

  getAuthenticatedUser(): User {
    return this.user;
  }

  login(credentials: { username: string, password: string }): Observable<any> {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<any>('http://localhost:8080/login', credentials, {
      headers,
      observe: 'response'
    }).pipe(
      tap( event => {
        if (event.type === HttpEventType.Response) {
          if (event.status === 200) {
            this.user = new User(credentials.username, credentials.password,
              event.headers.get('Authorization'),
              moment(Date.now()).add(30, 'm').toDate());

            // save authenticated user to local storage for later automatic login
            localStorage.setItem('user', JSON.stringify(this.user));
            this.autoLogout(this.user.tokenExpirationDate.getTime() - Date.now());
          }
        }
      })
    );
  }

  logout() {
    // Handle logout functionality
    localStorage.removeItem('user');
    if (this.automaticLogoutTimer) {
      clearTimeout(this.automaticLogoutTimer);
    }
    this.automaticLogoutTimer = null;
    this.user = null;
    this.router.navigate(['/login']);
  }

  autoLogout(expiration: number) {
    this.automaticLogoutTimer = setTimeout(() => { this.logout(); }, expiration);
  }

  isAuthenticated(): boolean {
    return this.user && this.user.tokenExpirationDate.getTime() > Date.now();
  }

  getToken(): string {
    return this.user.token;
  }
}
