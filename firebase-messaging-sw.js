importScripts('https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAec7FF9qM5rCXYOwDTgd1CoAY7WvEyK9s",
  authDomain: "barrio-seguro-f9271.firebaseapp.com",
  projectId: "barrio-seguro-f9271",
  storageBucket: "barrio-seguro-f9271.firebasestorage.app",
  messagingSenderId: "863945266838",
  appId: "1:863945266838:web:3ce88db7c3302b0ed914b7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/BARRIO-SEGURO/icon-192.png',
    badge: '/BARRIO-SEGURO/icon-192.png',
    vibrate: [500, 200, 500, 200, 500],
    requireInteraction: true,
    actions: [
      { action: 'ver', title: '🚨 Ver alerta' },
      { action: 'llamar', title: '📞 Llamar 911' }
    ]
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'llamar') {
    clients.openWindow('tel:911');
  } else {
    clients.openWindow('/BARRIO-SEGURO/index.html');
  }
});
