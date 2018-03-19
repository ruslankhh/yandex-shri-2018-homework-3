import * as PIXI from 'pixi.js';

import InterfaceFPS from '../InterfaceFPS/InterfaceFPS';
import InterfaceAudioVisualizer from
  '../InterfaceAudioVisualizer/InterfaceAudioVisualizer';
import InterfaceUserAgent from '../InterfaceUserAgent/InterfaceUserAgent';
import InterfaceExecution from '../InterfaceExecution/InterfaceExecution';
import InterfaceFaceTracker from '../InterfaceFaceTracker/InterfaceFaceTracker';

const Interface = new PIXI.Container();

Interface.addChild(
  InterfaceFPS,
  InterfaceAudioVisualizer,
  InterfaceUserAgent,
  InterfaceExecution,
  InterfaceFaceTracker
);

export default Interface;
