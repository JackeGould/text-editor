const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
  });h

// TODO: Add an handler for the `appinstalled` event

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
  });
  
  // Clear prompt after installation
  window.addEventListener('appinstalled', (event) => {
  
    window.deferredPrompt = null;
  });
