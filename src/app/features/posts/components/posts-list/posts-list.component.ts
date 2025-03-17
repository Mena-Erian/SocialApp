import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts-list',
  imports: [PostComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent {
  posts: any[] = [1, 2, 3, 4, 5, 6, 4];
}
