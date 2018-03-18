import Canvas from '../Canvas/Canvas';
import CanvasInterface from '../CanvasInterface/CanvasInterface';

const App = document.createElement('div');

App.className = 'App';
App.appendChild(Canvas);
App.appendChild(CanvasInterface);

export default App;
