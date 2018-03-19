import * as PIXI from 'pixi.js';

import AudioVisualizer from '../AudioVisualizer/AudioVisualizer';

const InterfaceAudioVisualizer = new PIXI.Container();

InterfaceAudioVisualizer.position.set(20, 60);

const texture = PIXI.Texture.fromCanvas(AudioVisualizer);
const sprite = new PIXI.Sprite(texture);

InterfaceAudioVisualizer.addChild(sprite);

const animate = () => {
  sprite.texture.update();
};

PIXI.ticker.shared.add(animate);

export default InterfaceAudioVisualizer;
