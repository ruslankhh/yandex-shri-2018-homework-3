import App from './blocks/App/App';
import CanvasInterface from './blocks/CanvasInterface/CanvasInterface';

const root = document.getElementById('root');

root.appendChild(App.view);
root.appendChild(CanvasInterface.view);

App.render();
