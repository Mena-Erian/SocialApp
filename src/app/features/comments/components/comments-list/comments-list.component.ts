import { Component, input } from '@angular/core';
import { IComment } from '../../../posts/model/postes.interface';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments-list',
  imports: [CommentComponent],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss',
})
export class CommentsListComponent {
  commentsPost = input.required<IComment[]>();
}
