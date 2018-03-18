import * as PIXI from 'pixi.js';

import Player from '../Player/Player';
import Interface from '../Interface/Interface';

import './App.css';

const App = new PIXI.Application({
  width: 640,
  height: 480
});

const { view } = App;

view.className = 'App';

App.stage.addChild(
  Player,
  Interface
);

export default App;
