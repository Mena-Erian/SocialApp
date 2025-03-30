import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './post-modal.component.html',
  styleUrl: './post-modal.component.scss',
})
export class PostModalComponent implements AfterViewInit {
  readonly modal = inject(NgbActiveModal);
  @ViewChild('postContantTextarea')
  postContantTextarea!: ElementRef<HTMLTextAreaElement>;
  ngAfterViewInit(): void {
    this.postContantTextarea.nativeElement.value = '';
    this.postContantTextarea.nativeElement.focus();
  }
  startDargImg(e: DragEvent): void {
    console.log('test', e);
    e.dataTransfer?.setData('', '');
  }
  post() {}
}
