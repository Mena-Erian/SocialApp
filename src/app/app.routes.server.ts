import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'userProfile/:userId/posts',
    renderMode: RenderMode.Server,
  },
  {
    path: 'userProfile/:userId',
    renderMode: RenderMode.Server,
  },
  {
    path: 'userProfile/:userId/',
    renderMode: RenderMode.Server,
  },
  {
    path: 'userProfile/:userId/reels',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
