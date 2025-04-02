import { PlatformCheckService } from './../../../../shared/services/platform-check.service';
import { PostsService } from './../../service/posts.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
  Type,
  ViewChild,
} from '@angular/core';
import { PostComponent } from '../post/post.component';
import { JsonPipe } from '@angular/common';
import { IPost } from '../../model/postes.interface';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { PostModalComponent } from '../post-modal/post-modal.component';

// @Component({
//   selector: 'ngbd-modal-confirm',
//   standalone: true,
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title" id="modal-title">Profile deletion</h4>
//       <button
//         type="button"
//         class="btn-close"
//         aria-describedby="modal-title"
//         (click)="modal.dismiss('Cross click')"
//       ></button>
//     </div>
//     <div class="modal-body">
//       <p>
//         <strong
//           >Are you sure you want to delete
//           <span class="text-primary">"John Doe"</span> profile?</strong
//         >
//       </p>
//       <p>
//         All information associated to this user profile will be permanently
//         deleted.
//         <span class="text-danger">This operation can not be undone.</span>
//       </p>
//     </div>
//     <div class="modal-footer">
//       <button
//         type="button"
//         class="btn btn-outline-secondary"
//         (click)="modal.dismiss('cancel click')"
//       >
//         Cancel
//       </button>
//       <button
//         type="button"
//         class="btn btn-danger"
//         (click)="modal.close('Ok click')"
//       >
//         Ok
//       </button>
//     </div>
//   `,
// })
// export class NgbdModalConfirm {
//   modal = inject(NgbActiveModal);
// }

// @Component({
//   selector: 'ngbd-modal-confirm-autofocus',
//   standalone: true,
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title" id="modal-title">Profile deletion</h4>
//       <button
//         type="button"
//         class="btn-close"
//         aria-label="Close button"
//         aria-describedby="modal-title"
//         (click)="modal.dismiss('Cross click')"
//       ></button>
//     </div>
//     <div class="modal-body">
//       <p>
//         <strong
//           >Are you sure you want to delete
//           <span class="text-primary">"John Doe"</span> profile?</strong
//         >
//       </p>
//       <p>
//         All information associated to this user profile will be permanently
//         deleted.
//         <span class="text-danger">This operation can not be undone.</span>
//       </p>
//     </div>
//     <div class="modal-footer">
//       <button
//         type="button"
//         class="btn btn-outline-secondary"
//         (click)="modal.dismiss('cancel click')"
//       >
//         Cancel
//       </button>
//       <button
//         type="button"
//         ngbAutofocus
//         class="btn btn-danger"
//         (click)="modal.close('Ok click')"
//       >
//         Ok
//       </button>
//     </div>
//   `,
// })
// export class NgbdModalConfirmAutofocus {
//   modal = inject(NgbActiveModal);
// }

// const MODALS: { [name: string]: Type<any> } = {
//   focusFirst: NgbdModalConfirm,
//   autofocus: NgbdModalConfirmAutofocus,
// };

@Component({
  selector: 'app-posts-list',
  imports: [PostComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent implements OnInit, OnDestroy, AfterViewInit {
  private modalService = inject(NgbModal);
  private readonly postsService = inject(PostsService);
  private readonly platformCheckService = inject(PlatformCheckService);
  private readonly renderer2 = inject(Renderer2);
  // private readonly ngbModalRef = inject(NgbModalRef);
  @ViewChild('newpostInput') newpostInput!: ElementRef<HTMLInputElement>;
  posts: IPost[] = [];
  res: any;
  ngOnInit(): void {
    this.getPosts();
  }
  ngAfterViewInit(): void {
    // this.openModal();
  }
  getPosts(): void {
    if (this.platformCheckService.isBrowser()) {
      this.postsService.getAllPosts().subscribe({
        next: (res) => {
          this.posts = res.posts;
          console.log(this.posts);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
  test() {}
  openModal() {
    this.renderer2.setProperty(this.newpostInput.nativeElement, 'value', '');
    this.modalService
      .open(PostModalComponent, {
        centered: true,
        backdrop: false,
      })
      .result.then(
        (value) => {
          console.log('cancle', value);
        },
        (reason) => {
          console.log('dismiss', reason);
          this.posts.unshift(reason);
        }
      );
    // console.log(this.ngbModalRef.result);
  }
  ngOnDestroy(): void {}
}

// export class NgbdModalConfirmAutofocus {
//   modal = inject(NgbActiveModal);
// }
// export class NgbdModalConfirm {
//   modal = inject(NgbActiveModal);
// }
// const MODALS: { [name: string]: Type<any> } = {
//   focusFirst: NgbdModalConfirm,
//   autofocus: NgbdModalConfirmAutofocus,
// };

/*
<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>
*/
//  import { Component, inject, Type } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
