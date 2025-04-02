import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IAllPosts } from '../model/postes.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly httpClient = inject(HttpClient);

  constructor() {}
  getAllPosts(): Observable<IAllPosts> {
    return this.httpClient.get<IAllPosts>(`${environment.baseUrl}/posts`);
  }
  createPost(body: FormData): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/posts`, body);
  }
  getUserPosts(userID: string, limit?: string | number): Observable<IAllPosts> {
    if (limit) {
      let params = new HttpParams().set('limit', `${limit}`);
      console.log(params.getAll('limit'));
      return this.httpClient.get<IAllPosts>(
        `${environment.baseUrl}/users/${userID}/posts`,
        { params }
      );
    }
    return this.httpClient.get<IAllPosts>(
      `${environment.baseUrl}/users/${userID}/posts`
    );
  }
}
