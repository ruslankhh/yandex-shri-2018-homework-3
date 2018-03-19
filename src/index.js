import parser from 'ua-parser-js';

import App from './blocks/App/App';
import Player from './blocks/Player/Player';

const root = document.getElementById('root');

const ua = parser(window.navigator.userAgent);
const isSupported = !['firefox', 'yandex'].includes(ua.browser.name.toLowerCase());

if (isSupported) {
  root.appendChild(Player);
}
root.appendChild(App.view);

App.render();
