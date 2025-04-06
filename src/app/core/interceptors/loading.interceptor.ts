import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const ngxSpinnerService = inject(NgxSpinnerService);
  const toastrService = inject(ToastrService);
  ngxSpinnerService.show();
  return next(req).pipe(
    finalize(() => {
      ngxSpinnerService.hide();
    })
  );
};
