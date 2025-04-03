import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IUserDataRoot } from '../../model/user-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  userData: any;
  constructor() {}
  signIn(form: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/users/signin', form);
  }
  getUserData(): Observable<IUserDataRoot> {
    return this.httpClient.get<IUserDataRoot>(
      `${environment.baseUrl}/users/profile-data`
    );
  }
}
