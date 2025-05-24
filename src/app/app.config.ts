import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { headerTokenInterceptor } from './core/interceptors/header-token.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { ErrorInterceptor } from './core/interceptors/errors.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { QIsBrowser } from './shared/services/platform-check.service';

export function QIsBrowser() {
  return typeof window !== 'undefined';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        headerTokenInterceptor,
        LoadingInterceptor,
        ErrorInterceptor,
      ])
    ),
    importProvidersFrom([
      NgxSpinnerModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        closeButton: true,
      }),
    ]),
    provideAnimationsAsync(),
    // { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
};
