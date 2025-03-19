import { PostsService } from './../../service/posts.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts-list',
  imports: [PostComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent implements OnInit, OnDestroy {
  private readonly postsService = inject(PostsService);
  posts: any[] = [1, 2, 3, 4, 5, 6, 4];
  ngOnInit(): void {
    // this.postsService.getAllPosts().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    // });
  }

  ngOnDestroy(): void {}
}
