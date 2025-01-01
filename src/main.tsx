import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { registerServiceWorker, setupOfflineDetection } from './utils/pwa';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize PWA features
if (import.meta.env.PROD) {
  registerServiceWorker();
  setupOfflineDetection();
}