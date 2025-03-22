import { inject, PLATFORM_ID } from '@angular/core';
import { PlatformCheckService } from './../../shared/services/platform-check.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

export const headerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const platformCheckService: PlatformCheckService =
    inject(PlatformCheckService);

  if (platformCheckService.isBrowser()) {
    req = req.clone({
      setHeaders: {
        token: localStorage.getItem('socialToken') || '',
      },
    });
    return next(req);
  }
  return next(req);
};
