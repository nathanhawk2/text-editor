const { text } = require("express");

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', async () => {
  const prompt = window.deferredPrompt;
  prompt.prompt();
  window.deferredPrompt = null;
  butInstall.setAttribute('hidden', true);
  butInstall.textContent = 'installed';
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Finished';
  console.log(event);
});
