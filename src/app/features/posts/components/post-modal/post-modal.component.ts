import { AuthService } from './../../../../core/auth/services/auth.service';
import { PostsService } from './../../service/posts.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Blob } from 'buffer';
import { ToastrService } from 'ngx-toastr';
import { resolve } from 'path';
// import { URL } from 'url';

@Component({
  selector: 'app-post-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './post-modal.component.html',
  styleUrl: './post-modal.component.scss',
})
export class PostModalComponent implements AfterViewInit, OnInit {
  readonly modal = inject(NgbActiveModal);
  private readonly renderer2 = inject(Renderer2);
  private readonly postsService = inject(PostsService);
  private readonly authService = inject(AuthService);
  private readonly toastrService = inject(ToastrService);
  @ViewChild('postContantTextarea')
  postContantTextarea!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('photoLabel', { static: false })
  photoLabelElment!: ElementRef<HTMLLabelElement>;
  photoDragOver: boolean = false;
  postForm: FormGroup = {} as FormGroup;
  savedFile: File | null = null;
  imgUrl: string = '';
  ngOnInit(): void {
    this.initPostForm();
  }
  ngAfterViewInit(): void {
    this.postContantTextarea.nativeElement.value = '';
    this.postContantTextarea.nativeElement.focus();
  }
  initPostForm(): void {
    this.postForm = new FormGroup({
      body: new FormControl<string | ''>(''),
      image: new FormControl<File | null>(null),
    });
  }
  setFile(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.savedFile = input.files[0];
      this.postForm.patchValue({ image: this.savedFile });
      this.imgUrl = URL.createObjectURL(this.savedFile);
      console.log(this.imgUrl);
    }
  }
  dropImg(e: DragEvent): void {
    e.preventDefault();
    this.photoDragOver = false;
    const dataTransferFiles = e.dataTransfer?.files;
    if (dataTransferFiles && dataTransferFiles?.length > 0) {
      this.savedFile = dataTransferFiles[0];
      this.postForm.patchValue({ image: this.savedFile });
      this.imgUrl = URL.createObjectURL(this.savedFile);
      console.log(this.imgUrl);
    } else {
      console.error('drag again');
    }
  }
  startDargImg(eventInfo: DragEvent): void {
    eventInfo.preventDefault();
    this.photoDragOver = true;
    this.renderer2.addClass(this.photoLabelElment.nativeElement, 'startDrag');
  }

  dismissModal(): void {
    this.modal.dismiss('ok close');
  }
  submitPostForm() {
    let post = this.postForm.value;
    if (post.image === null) {
      delete post.image;
    } else {
      const formData = new FormData();
      if (post.body) {
        formData.append(Object.keys(post)[0], post.body);
      }
      formData.append(Object.keys(post)[1], post.image);
      post = formData;
    }
    console.log(post);
    this.postsService.createPost(post).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message === 'success') {
          console.log('all success');
          this.authService.getUserData().subscribe({
            next: (res) => {
              console.log(res);
              if (res.message === 'success') {
                this.authService.userData = res.user;
                this.postsService
                  .getUserPosts(this.authService.userData._id)
                  .subscribe({
                    next: (res) => {
                      console.log(res);
                      this.modal.dismiss(res.posts[res.posts.length - 1]);
                      this.toastrService.success(res.message);
                    },
                    error(err) {
                      console.error(err.error);
                    },
                  });
              }
            },
          });
        }
      },
      error: (err) => {
        console.error(err.error);
      },
    });
  }
}
