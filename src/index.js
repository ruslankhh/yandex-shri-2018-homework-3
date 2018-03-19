import App from './blocks/App/App';
// import Player from './blocks/Player/Player';

const root = document.getElementById('root');

// root.appendChild(Player);
root.appendChild(App.view);

App.render();
