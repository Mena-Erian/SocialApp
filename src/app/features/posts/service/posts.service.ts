import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly httpClient = inject(HttpClient);

  constructor() {}
  getAllPosts(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + '/posts');
  }
  createPost(): Observable<any> {
    return this.httpClient.post(``, ``);
  }
}
