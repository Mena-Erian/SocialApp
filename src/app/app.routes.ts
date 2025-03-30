import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { SigninComponent } from './core/auth/signin/signin.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { TimelineComponent } from './features/timeline/components/timeline/timeline.component';
import { PostModalComponent } from './features/posts/components/post-modal/post-modal.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent, title: 'Login' },
      { path: 'signup', component: SignupComponent, title: 'Sign Up' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: 'timeline', component: TimelineComponent }],
  },
];
