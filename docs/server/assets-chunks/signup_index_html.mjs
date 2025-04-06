export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Sign Up</title>
  <base href="/Facebook_Clone/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-black: #000;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-primary-text-emphasis: rgb(5.2, 44, 101.2);--bs-secondary-text-emphasis: rgb(43.2, 46.8, 50);--bs-success-text-emphasis: rgb(10, 54, 33.6);--bs-info-text-emphasis: rgb(5.2, 80.8, 96);--bs-warning-text-emphasis: rgb(102, 77.2, 2.8);--bs-danger-text-emphasis: rgb(88, 21.2, 27.6);--bs-light-text-emphasis: #495057;--bs-dark-text-emphasis: #495057;--bs-primary-bg-subtle: rgb(206.6, 226, 254.6);--bs-secondary-bg-subtle: rgb(225.6, 227.4, 229);--bs-success-bg-subtle: rgb(209, 231, 220.8);--bs-info-bg-subtle: rgb(206.6, 244.4, 252);--bs-warning-bg-subtle: rgb(255, 242.6, 205.4);--bs-danger-bg-subtle: rgb(248, 214.6, 217.8);--bs-light-bg-subtle: rgb(251.5, 252, 252.5);--bs-dark-bg-subtle: #ced4da;--bs-primary-border-subtle: rgb(158.2, 197, 254.2);--bs-secondary-border-subtle: rgb(196.2, 199.8, 203);--bs-success-border-subtle: rgb(163, 207, 186.6);--bs-info-border-subtle: rgb(158.2, 233.8, 249);--bs-warning-border-subtle: rgb(255, 230.2, 155.8);--bs-danger-border-subtle: rgb(241, 174.2, 180.6);--bs-light-border-subtle: #e9ecef;--bs-dark-border-subtle: #adb5bd;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size: 1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg: #fff;--bs-body-bg-rgb: 255, 255, 255;--bs-emphasis-color: #000;--bs-emphasis-color-rgb: 0, 0, 0;--bs-secondary-color: rgba(33, 37, 41, .75);--bs-secondary-color-rgb: 33, 37, 41;--bs-secondary-bg: #e9ecef;--bs-secondary-bg-rgb: 233, 236, 239;--bs-tertiary-color: rgba(33, 37, 41, .5);--bs-tertiary-color-rgb: 33, 37, 41;--bs-tertiary-bg: #f8f9fa;--bs-tertiary-bg-rgb: 248, 249, 250;--bs-heading-color: inherit;--bs-link-color: #0d6efd;--bs-link-color-rgb: 13, 110, 253;--bs-link-decoration: underline;--bs-link-hover-color: rgb(10.4, 88, 202.4);--bs-link-hover-color-rgb: 10, 88, 202;--bs-code-color: #d63384;--bs-highlight-color: #212529;--bs-highlight-bg: rgb(255, 242.6, 205.4);--bs-border-width: 1px;--bs-border-style: solid;--bs-border-color: #dee2e6;--bs-border-color-translucent: rgba(0, 0, 0, .175);--bs-border-radius: .375rem;--bs-border-radius-sm: .25rem;--bs-border-radius-lg: .5rem;--bs-border-radius-xl: 1rem;--bs-border-radius-xxl: 2rem;--bs-border-radius-2xl: var(--bs-border-radius-xxl);--bs-border-radius-pill: 50rem;--bs-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm: 0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width: .25rem;--bs-focus-ring-opacity: .25;--bs-focus-ring-color: rgba(13, 110, 253, .25);--bs-form-valid-color: #198754;--bs-form-valid-border-color: #198754;--bs-form-invalid-color: #dc3545;--bs-form-invalid-border-color: #dc3545}*,*:before,*:after{box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25}h4,h3{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}h3{font-size:calc(1.3rem + .6vw)}@media (min-width: 1200px){h3{font-size:1.75rem}}h4{font-size:calc(1.275rem + .3vw)}@media (min-width: 1200px){h4{font-size:1.5rem}}p{margin-top:0;margin-bottom:1rem}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{text-transform:none}button,[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}:root{--bs-breakpoint-xs: 0;--bs-breakpoint-sm: 576px;--bs-breakpoint-md: 768px;--bs-breakpoint-lg: 992px;--bs-breakpoint-xl: 1200px;--bs-breakpoint-xxl: 1400px}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);appearance:none;background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}.btn{--bs-btn-padding-x: .75rem;--bs-btn-padding-y: .375rem;--bs-btn-font-family: ;--bs-btn-font-size: 1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: var(--bs-body-color);--bs-btn-bg: transparent;--bs-btn-border-width: var(--bs-border-width);--bs-btn-border-color: transparent;--bs-btn-border-radius: var(--bs-border-radius);--bs-btn-hover-border-color: transparent;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);--bs-btn-disabled-opacity: .65;--bs-btn-focus-box-shadow: 0 0 0 .25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn:first-child:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn:first-child:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color: #fff;--bs-btn-bg: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: rgb(11.05, 93.5, 215.05);--bs-btn-hover-border-color: rgb(10.4, 88, 202.4);--bs-btn-focus-shadow-rgb: 49, 132, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: rgb(10.4, 88, 202.4);--bs-btn-active-border-color: rgb(9.75, 82.5, 189.75);--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #0d6efd;--bs-btn-disabled-border-color: #0d6efd}.d-inline-block{display:inline-block!important}.d-flex{display:flex!important}.shadow-none{box-shadow:none!important}.w-75{width:75%!important}.w-100{width:100%!important}.vh-100{height:100vh!important}.flex-column{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.mt-4{margin-top:1.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-5{margin-bottom:3rem!important}.gap-3{gap:1rem!important}.fw-light{font-weight:300!important}.fw-bold{font-weight:700!important}.text-center{text-align:center!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-primary{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}:root{--main-color: #1d4ed8;--main-color-2: #d2d0d042}.text-main{color:var(--main-color)}.pointer:hover{cursor:pointer}
</style><link rel="stylesheet" href="styles-PCAIW3UC.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-PCAIW3UC.css"></noscript><style ng-app-id="ng">.ngx-spinner-overlay[_ngcontent-ng-c2230211809]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-ng-c2230211809] > div[_ngcontent-ng-c2230211809]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-ng-c2230211809]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.2.1" ngh="3" ng-server-context="ssg"><ngx-spinner bgcolor="rgba(0,0,0,0.3)" size="medium" color="#fff" type="ball-scale-ripple-multiple" _nghost-ng-c2230211809 class="ng-tns-c2230211809-0" ngh="0"><!----></ngx-spinner><router-outlet></router-outlet><app-auth-layout class="ng-star-inserted" ngh="2"><router-outlet></router-outlet><app-signup class="ng-star-inserted" ngh="1"><section class="vh-100 d-flex justify-content-center align-items-center"><div class="d-flex justify-content-center flex-wrap flex-column align-items-center w-75 mx-auto"><h3 class="text-main-color text-uppercase mb-5 text-main fw-bold"> facebook clone </h3><h4 class="text-center text-capitalize fw-bold">create a new account</h4><p class="fw-light">it's quick and easy.</p><hr><form class="w-100"><div class="d-flex justify-content-center align-items-center gap-3"><input placeholder="First name" type="text" class="form-control shadow-none mb-3 rounded-3"><input placeholder="Surname" type="text" class="form-control shadow-none mb-3 rounded-3"></div><div class="d-flex justify-content-between align-items-center"></div><button type="submit" class="btn btn-primary w-100 rounded-pill"> Sign Up </button></form><span routerlink="/signin" class="pointer text-primary d-inline-block mt-4 text-center mx-auto w-100" tabindex="0" jsaction="click:;"> Already have an account? </span></div></section></app-signup><!----></app-auth-layout><!----></app-root>
<script src="polyfills-EQXJKH7W.js" type="module"></script><script src="main-QMDBL6CK.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"0":"t0"},"c":{"0":[]}},{},{"c":{"0":[{"i":"c479088134","r":1}]}},{"d":[1,2],"c":{"3":[{"i":"c2214190179","r":1}]}}]}</script></body></html>`;