import {
  Component,
  input,
  signal,
  ViewEncapsulation,
  WritableSignal,
} from '@angular/core';
import { IPost } from '../../model/postes.interface';
import { DatePipe } from '@angular/common';
import { CommentsListComponent } from '../../../comments/components/comments-list/comments-list.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-post',
  imports: [DatePipe, CommentsListComponent, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostComponent {
  post = input.required<IPost>();
  isShowcomments: WritableSignal<boolean> = signal<boolean>(false);
  showComments() {
    this.isShowcomments.update((prevValue) => {
      switch (prevValue) {
        case true:
          return false;
        case false:
          return true;
        default:
          return true;
      }
    });
  }
}
