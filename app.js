import { Client } from 'https://cdn.jsdelivr.net/npm/@walletconnect/client@1.8.0/dist/esm/index.min.js';
import StellarSdk from 'https://cdn.jsdelivr.net/npm/stellar-sdk/dist/stellar-sdk.js';

const walletConnectId = document.currentScript.getAttribute('data-walletconnect-id');

const server = new StellarSdk.Server('https://horizon.stellar.org');
const walletConnect = new Client({ bridge: 'https://bridge.walletconnect.org', qrcodeModalOptions: { mobileLinks: ['rainbow', 'metamask', 'trust'] } });

const connectButton = document.getElementById('connectButton');
const publicKeyElement = document.getElementById('publicKey');

connectButton.addEventListener('click', async () => {
  try {
    await walletConnect.connect({ bridge: 'https://bridge.walletconnect.org', qrcodeModalOptions: { mobileLinks: ['rainbow', 'metamask', 'trust'] }, clientId: walletConnectId });
    console.log('Connected');

    const publicKey = walletConnect.accounts[0];
    publicKeyElement.textContent = `Connected Public Key: ${publicKey}`;
  } catch (error) {
    console.error('Error connecting:', error);
  }
});
