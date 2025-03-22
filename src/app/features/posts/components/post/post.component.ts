import { Component, input } from '@angular/core';
import { IPost } from '../../model/postes.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post = input.required<IPost>();
}
