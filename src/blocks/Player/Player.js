import * as PIXI from 'pixi.js';
import { AdjustmentFilter } from '@pixi/filter-adjustment';
import { PixelateFilter } from '@pixi/filter-pixelate';
import { GlitchFilter } from '@pixi/filter-glitch';

const Player = new PIXI.Container();
const view = document.createElement('video');

view.className = 'Player';
view.autoplay = true;
view.defaultMuted = true;

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(stream => {
    try {
      view.srcObject = stream;
    } catch (error) {
      view.src = URL.createObjectURL(stream);
    }
  });

const texture = PIXI.Texture.fromVideo(view);
const videoSprite = new PIXI.Sprite(texture);

const blurFilter = new PIXI.filters.BlurFilter(0.5, 1, 1, 5);
const colorMatrixFilter = new PIXI.filters.ColorMatrixFilter();
colorMatrixFilter.greyscale(0.5, true);
const adjustmentFilter = new AdjustmentFilter({
  contrast: 1.5,
  saturation: 10,
  red: 3
});

const defaultFilters = [
  blurFilter,
  colorMatrixFilter,
  adjustmentFilter
];

Player.filters = defaultFilters;

const animate = () => {
  const iter = (counter) => {
    const pixelateFilter = new PixelateFilter(32 * Math.random());
    const glitchFilter = new GlitchFilter({});

    Player.filters = [
      pixelateFilter,
      glitchFilter,
      ...defaultFilters
    ];

    if (counter > 0) {
      setTimeout(() => {
        iter(counter - 1);
      }, 100 + 400 * Math.random());
    } else {
      Player.filters = defaultFilters;

      setTimeout(animate, 10000 + 10000 * Math.random());
    }
  };

  iter(1 + 4 * Math.random());
};

setTimeout(animate, 10000 + 10000 * Math.random());

Player.addChild(videoSprite);

export default Player;
