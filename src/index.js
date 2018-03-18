import App from './blocks/App/App';
import Interface from './blocks/Interface/Interface';

const root = document.getElementById('root');

root.appendChild(App.view);
root.appendChild(Interface.view);

App.render();
