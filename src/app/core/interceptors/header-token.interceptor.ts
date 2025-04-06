import { inject } from '@angular/core';
import { PlatformCheckService } from './../../shared/services/platform-check.service';
import { HttpInterceptorFn } from '@angular/common/http';

export const headerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const platformCheckService: PlatformCheckService =
    inject(PlatformCheckService);

  if (platformCheckService.isBrowser()) {
    req = req.clone({
      setHeaders: {
        token: localStorage.getItem('socialToken') || '',
      },
    });
  }
  return next(req);
};
