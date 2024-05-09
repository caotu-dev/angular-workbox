# Angular workbox

Integrate [Workbox](https://developer.chrome.com/docs/workbox/what-is-workbox) to Angular app - a service worker library integration for WPA (Progressive Web App) which caching assets, api response, ...etc in order to work in Offline mode.

## Workbox
`injectManifest` mode will generate a list of URLs to precache, and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.
`workbox-routing` for request matching.
`workbox-strategies` for caching strategies.
`workbox-precaching` for precaching.
`workbox-expiration` for managing caches.
`workbox-window` for registering a service worker and handling updates in the window context.

## Serve
 - Copy content of `.env.local` to `.env`
 - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
 - Local Environment: `npm run start:local`  on port 8100
 - Dev Environment: `npm run start:dev` on port 8100
 - Prod Environment: `npm run start:prod` on port 8100

## Build
 - Local Environment: `npm run build:local`
 - Dev Environment: `npm run build:dev`
 - Prod Environment: `npm run build:prod`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
``
