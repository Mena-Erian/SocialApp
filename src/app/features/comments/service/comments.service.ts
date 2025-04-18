import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IAddCmt } from '../model/comments.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}
  createCmt(contentCmt: string, postId: string): Observable<IAddCmt> {
    return this.httpClient.post<IAddCmt>(`${environment.baseUrl}/comments`, {
      content: contentCmt,
      post: postId,
    });
  }
  getPostCmt(postId: string): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.baseUrl}/posts/${postId}/comments`
    );
  }
  updateCmt(contentUpdated: FormData, cmtId: string): Observable<any> {
    return this.httpClient.put<any>(
      `${environment.baseUrl}/comments/${cmtId}`,
      contentUpdated
    );
  }
  deleteCmt(cmtId: string): Observable<any> {
    return this.httpClient.delete<any>(
      `${environment.baseUrl}/comments/${cmtId}`
    );
  }
}
