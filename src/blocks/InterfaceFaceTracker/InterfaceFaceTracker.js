import * as PIXI from 'pixi.js';

import FaceTrackerInterface from '../FaceTrackerInterface/FaceTrackerInterface';

const InterfaceFaceTracker = new PIXI.Container();

InterfaceFaceTracker.position.set(0, 0);

const texture = PIXI.Texture.fromCanvas(FaceTrackerInterface);
const sprite = new PIXI.Sprite(texture);

InterfaceFaceTracker.addChild(sprite);

const animate = () => {
  sprite.texture.update();
};

PIXI.ticker.shared.add(animate);

export default InterfaceFaceTracker;
