import { PlatformCheckService } from './../../../../shared/services/platform-check.service';
import { PostsService } from './../../service/posts.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { JsonPipe } from '@angular/common';
import { IPost } from '../../model/interfaces/postes.interface';

@Component({
  selector: 'app-posts-list',
  imports: [PostComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent implements OnInit, OnDestroy {
  private readonly postsService = inject(PostsService);
  private readonly platformCheckService = inject(PlatformCheckService);
  posts: IPost[] = [];
  res: any;
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    if (this.platformCheckService.isBrowser()) {
      this.postsService.getAllPosts().subscribe({
        next: (res) => {
          this.posts = res.posts;
          console.log(this.posts);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
  ngOnDestroy(): void {}
}
