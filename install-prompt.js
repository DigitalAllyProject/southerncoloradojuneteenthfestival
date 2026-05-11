/* Install prompt — opens the install dialog and triggers the native
 * install prompt where supported (Android Chrome). Shows OS-specific
 * instructions for iOS (Safari) and desktop browsers.
 */
(function () {
  const trigger = document.getElementById('install-trigger');
  const dialog = document.getElementById('install-dialog');
  const closeBtn = document.getElementById('install-dialog-close');
  const nativeBtn = document.getElementById('install-native-btn');
  const iosDetails = document.getElementById('install-ios');
  const androidDetails = document.getElementById('install-android');
  const desktopDetails = document.getElementById('install-desktop');

  if (!trigger || !dialog) return;

  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isAndroid = /Android/i.test(ua);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;

  // Hide trigger if already installed
  if (isStandalone) {
    trigger.hidden = true;
  } else {
    trigger.hidden = false;
    if (isIOS && iosDetails) iosDetails.open = true;
    else if (isAndroid && androidDetails) androidDetails.open = true;
    else if (desktopDetails) desktopDetails.open = true;
  }

  // Capture the native install prompt event (Android Chrome / desktop Chrome)
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (nativeBtn) nativeBtn.hidden = false;
    trigger.hidden = false;
  });

  trigger.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    });
  }

  // Click outside dialog content closes it
  dialog.addEventListener('click', e => {
    if (e.target === dialog && typeof dialog.close === 'function') dialog.close();
  });

  if (nativeBtn) {
    nativeBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      try {
        const result = await deferredPrompt.userChoice;
        if (result && result.outcome === 'accepted' && typeof dialog.close === 'function') {
          dialog.close();
        }
      } catch (err) {
        // User dismissed; nothing to do
      }
      deferredPrompt = null;
      nativeBtn.hidden = true;
    });
  }

  window.addEventListener('appinstalled', () => {
    trigger.hidden = true;
    if (dialog.open && typeof dialog.close === 'function') dialog.close();
  });
})();
