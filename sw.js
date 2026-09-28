// অ্যাপ ইনস্টলের জন্য দরকারি ছোট ফাইল — এখানে কিছু বদলাতে হবে না
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => new Response('<meta charset="utf-8"><body style="font-family:serif;padding:40px;text-align:center">ইন্টারনেট সংযোগ নেই। সংযোগ চালু করে আবার খুলুন।</body>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
