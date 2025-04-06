import { CommentsService } from './../../service/comments.service';
import {
  AfterViewInit,
  Component,
  computed,
  effect,
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
import { NgClass } from '@angular/common';
import { IAddCmt } from '../../model/comments.interface';

@Component({
  selector: 'app-comments-list',
  imports: [CommentComponent, FormsModule, NgClass],
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
    () => this.commentsList()[this.commentsList().length - 1] || []
  );
  res: IComment[] = {} as IComment[];
  constructor() {
    effect(() => {
      this.commentsList = signal(this.commentsPost());
      this.showAllCmt = signal(this.show());
    });
  }
  showAllCmt: WritableSignal<boolean> = signal(false);
  commentsList: WritableSignal<IComment[]> = signal([]);
  newComment: string = '';
  commentRegExp: RegExp = /^.{2,}$/;
  @ViewChild('newCmtInputEl') newCmtInput!: ElementRef<HTMLInputElement>;
  @ViewChild('cmtContainer') cmtContainer!: ElementRef<HTMLElement>;
  createComment(contentCmt: string, postId: string): void {
    this.isNewCmtVaild(contentCmt);
    if (this.commentRegExp.test(contentCmt)) {
      console.log('your comment:', contentCmt);
      this.loading = true;
      this.commentsService.createCmt(contentCmt, postId).subscribe({
        next: (res) => {
          this.loading = false;
          this.showAllCmt.set(true);
          this.newComment = '';
          console.log(res);
          this.commentsList.set(res.comments.reverse());
          console.log(this.commentsList());
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
  focusOnInput(): void {
    this.newCmtInput.nativeElement.focus();
  }
  isNewCmtVaild(newCmt: string): boolean {
    if (this.commentRegExp.test(newCmt)) {
      return true;
    }
    return false;
  }
  scrollToBottom(): void {
    const cmtContainer = this.cmtContainer.nativeElement;
    cmtContainer.scrollTop = cmtContainer.scrollHeight;
  }
}
