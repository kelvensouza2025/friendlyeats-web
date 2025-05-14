import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// 🔽 Registra o Service Worker do Firebase Messaging
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch((err) => {
      console.error('Erro ao registrar o Service Worker:', err);
    });
}
