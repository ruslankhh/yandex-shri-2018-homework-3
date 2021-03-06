import * as PIXI from 'pixi.js';

import InterfaceFPS from '../InterfaceFPS/InterfaceFPS';
import InterfaceAudioVisualizer from
  '../InterfaceAudioVisualizer/InterfaceAudioVisualizer';
import InterfaceUserAgent from '../InterfaceUserAgent/InterfaceUserAgent';
import InterfaceExecution from '../InterfaceExecution/InterfaceExecution';
import InterfaceFaceTracking from '../InterfaceFaceTracking/InterfaceFaceTracking';

const Interface = new PIXI.Container();

Interface.addChild(
  InterfaceFPS,
  InterfaceAudioVisualizer,
  InterfaceUserAgent,
  InterfaceExecution,
  InterfaceFaceTracking
);

export default Interface;
