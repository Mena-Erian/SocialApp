import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      toastrService.error(err.error.error);
      return throwError(() => err);
    })
  );
};
