import { CommentsService } from './../../service/comments.service';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { IComment } from '../../../posts/model/postes.interface';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments-list',
  imports: [CommentComponent, FormsModule],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss',
})
export class CommentsListComponent {
  show = input.required<boolean>();
  commentsPost = input.required<IComment[]>();
  postId = input.required<string>();
  private readonly commentsService = inject(CommentsService);
  loading: boolean = false;
  lastComment = computed(
    () => this.commentsPost()[this.commentsPost().length - 1]
  );
  newComment: string = '';
  commentRegExp: RegExp = /^.{3,}$/;
  createComment(contentCmt: string, postId: string): void {
    if (this.commentRegExp.test(contentCmt)) {
      console.log('your comment:', contentCmt);
      this.loading = true;
      this.commentsService.createCmt(contentCmt, postId).subscribe({
        next: (res) => {
          this.loading = false;
          this.newComment = '';
          console.log(res);
        },
        error: (err) => {
          this.loading = false;
          console.error(err);
        },
      });
    } else {
      console.log('you have err in you comment');
    }
  }
}
