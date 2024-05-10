import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Workbox } from "workbox-window";
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then((_) => loadServiceWorker())
  .catch(err => console.error(err));

function loadServiceWorker() {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("./service-worker.js");
    wb.addEventListener("activated", async (event) => {
      if (!event.isUpdate) {
        console.log("Service worker activated for the first time");
      } else {
        console.log("Service worker activated");
      }
    });

    wb.addEventListener('waiting', event => {
      console.log(
        `A new service worker has installed, but it can't activate` +
          `until all tabs running the current version have fully unloaded.`
      );
      wb.messageSW({ type: "SKIP_WAITING" });
    });

    wb.addEventListener("installed", (event) => {
      if (!event.isUpdate) {
        console.log("Service worker installed for the first time");
      } else {
        console.log("Service worker installed");
      }
    });

    wb.register().then(() => {
      console.log('Service Worker registered');
      // Send a message to the service worker
      wb.messageSW({ type: 'PING' })
        .then((event) => {
          console.log('Received PONG message from service worker:', event);
        })
        .catch((error) => {
          console.error('Error sending message to service worker:', error);
        });
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  }
}
