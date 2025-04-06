
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Facebook_Clone/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Facebook_Clone"
  },
  {
    "renderMode": 2,
    "route": "/Facebook_Clone/signin"
  },
  {
    "renderMode": 2,
    "route": "/Facebook_Clone/signup"
  },
  {
    "renderMode": 2,
    "route": "/Facebook_Clone/timeline"
  },
  {
    "renderMode": 0,
    "redirectTo": "/Facebook_Clone/userProfile/*/posts",
    "route": "/Facebook_Clone/userProfile/*"
  },
  {
    "renderMode": 0,
    "route": "/Facebook_Clone/userProfile/*/posts"
  },
  {
    "renderMode": 0,
    "route": "/Facebook_Clone/userProfile/*/reels"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5493, hash: 'dff3c23fa32cb6484bcf2cd735ae0420e7f6d5cb028f25b6344ccd07ab11cbd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '392f5f6617b171ac295eabd26aaf5bb974e0202173f79fc03b54b40308083f92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15271, hash: '37f33c52c8e2ac6c4eb7ed7a60c08be930652ff5301b7221780fd565be08da10', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 15271, hash: '37f33c52c8e2ac6c4eb7ed7a60c08be930652ff5301b7221780fd565be08da10', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'timeline/index.html': {size: 23109, hash: '6d26a0a250140e1aa44aacc5de86e74db5c66763e47ccfdf3705d2434f218bb7', text: () => import('./assets-chunks/timeline_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 14204, hash: '5c31ab7c5f5d2eeb3beb20603a6a2ab35a78707e21363d3a0c43948e779debf8', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-PCAIW3UC.css': {size: 235064, hash: 'yQeUTCKLn/s', text: () => import('./assets-chunks/styles-PCAIW3UC_css.mjs').then(m => m.default)}
  },
};
