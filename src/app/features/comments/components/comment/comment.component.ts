import { Component, input } from '@angular/core';
import { IComment } from '../../../posts/model/postes.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comment',
  imports: [DatePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  cmt = input.required<IComment>();
}
