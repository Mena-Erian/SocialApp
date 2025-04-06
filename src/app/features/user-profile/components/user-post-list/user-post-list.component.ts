import { ActivatedRoute } from '@angular/router';
import { PostsService } from './../../../posts/service/posts.service';
import { Component, inject, input, OnInit } from '@angular/core';
import { PostComponent } from '../../../posts/components/post/post.component';
import { IAllPosts, IPost } from '../../../posts/model/postes.interface';
import { PlatformCheckService } from '../../../../shared/services/platform-check.service';

@Component({
  selector: 'app-user-post-list',
  imports: [PostComponent],
  templateUrl: './user-post-list.component.html',
  styleUrl: './user-post-list.component.scss',
})
export class UserPostListComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  private readonly platformCheckService = inject(PlatformCheckService);
  private readonly activatedRoute = inject(ActivatedRoute);
  userId: string = '';
  posts: IPost[] = [];
  ngOnInit() {
    this.getUserID();
    this.getUserPosts();
  }
  getUserID() {
    this.userId = this.activatedRoute.parent?.snapshot.params['userId'] || '';
    return this.userId;
  }
  getUserPosts(): void {
    if (this.platformCheckService.isBrowser()) {
      this.postsService.getUserPosts(this.userId).subscribe({
        next: (res) => {
          console.log(res);
          this.postsService.userDataUserPorfile.set(res.posts[0].user);
          console.log(this.postsService.userDataUserPorfile());
          this.posts = res.posts;
        },
      });
    }
  }
}
