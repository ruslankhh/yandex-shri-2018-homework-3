import * as PIXI from 'pixi.js';

import PlayerContainer from '../PlayerContainer/PlayerContainer';
import InterfaceContainer from '../InterfaceContainer/InterfaceContainer';

import './App.css';

const App = new PIXI.Application({
  width: 640,
  height: 480
});

const { view } = App;

view.className = 'App';

App.stage.addChild(
  PlayerContainer,
  InterfaceContainer
);

export default App;
