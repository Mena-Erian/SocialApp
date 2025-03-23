import { Component, input } from '@angular/core';
import { IPost } from '../../model/postes.interface';
import { DatePipe } from '@angular/common';
import { CommentsListComponent } from '../../../comments/components/comments-list/comments-list.component';
@Component({
  selector: 'app-post',
  imports: [DatePipe, CommentsListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post = input.required<IPost>();
}
