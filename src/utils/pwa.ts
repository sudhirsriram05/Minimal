// PWA registration and update handling
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
      });

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, show update prompt
              showUpdatePrompt();
            }
          });
        }
      });

      return registration;
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }
};

// Show update prompt to user
const showUpdatePrompt = () => {
  const shouldUpdate = window.confirm(
    'A new version is available! Would you like to update?'
  );
  if (shouldUpdate) {
    window.location.reload();
  }
};

// Check if app is installed
export const isPWAInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone ||
         document.referrer.includes('android-app://');
};

// Handle offline functionality
export const setupOfflineDetection = () => {
  window.addEventListener('online', () => {
    document.body.classList.remove('offline');
  });
  
  window.addEventListener('offline', () => {
    document.body.classList.add('offline');
  });
};