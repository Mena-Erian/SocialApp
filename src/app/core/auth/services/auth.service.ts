import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  constructor() {}
  signIn(form: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/users/signin', form);
  }
}
