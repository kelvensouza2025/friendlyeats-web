import { firebaseConfig } from "./environments/environment";

// Importando o Firebase Messaging SDK
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Manipulador para notificações em segundo plano
messaging.onBackgroundMessage(function (payload) {
  console.log("Mensagem recebida em segundo plano ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  // Exibindo a notificação
  self.registration.showNotification(notificationTitle, notificationOptions);
});
