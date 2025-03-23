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
export class CommentsListComponent implements AfterViewInit, OnDestroy {
  show = input.required<boolean>();
  commentsPost = input.required<IComment[]>();
  postId = input.required<string>();
  private readonly commentsService = inject(CommentsService);
  private formSubmitListener!: () => void;
  loading: boolean = false;
  lastComment = computed(
    () => this.commentsPost()[this.commentsPost().length - 1]
  );
  newComment!: string;
  constructor(private renderer2: Renderer2) {}
  @ViewChild('newCmtForm') newCmtForm!: ElementRef<HTMLFormElement>;
  @ViewChild('newCmtInput') newCmtInput!: ElementRef<HTMLInputElement>;
  ngAfterViewInit(): void {
    this.submitEventInit();
  }
  submitEventInit() {
    this.formSubmitListener = this.renderer2.listen(
      this.newCmtForm.nativeElement,
      'submit',
      (e: SubmitEvent) => {
        // console.log('test', e);
        e.preventDefault();
      }
    );
  }

  createComment(contentCmt: string, postId: string): void {
    this.loading = true;
    this.newCmtInput.nativeElement.value = '';

    this.commentsService.createCmt(contentCmt, postId).subscribe({
      next: (res) => {
        this.loading = false;
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.formSubmitListener();
  }
}
