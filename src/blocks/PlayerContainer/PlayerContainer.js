import * as PIXI from 'pixi.js';
import { AdjustmentFilter } from '@pixi/filter-adjustment';
import { PixelateFilter } from '@pixi/filter-pixelate';
import { GlitchFilter } from '@pixi/filter-glitch';

import Player from '../Player/Player';

const PlayerContainer = new PIXI.Container();

const texture = PIXI.Texture.fromVideo(Player);
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

PlayerContainer.filters = defaultFilters;

const animate = () => {
  const iter = (counter) => {
    const pixelateFilter = new PixelateFilter(32 * Math.random());
    const glitchFilter = new GlitchFilter({});

    PlayerContainer.filters = [
      pixelateFilter,
      glitchFilter,
      ...defaultFilters
    ];

    if (counter > 0) {
      setTimeout(() => {
        iter(counter - 1);
      }, 100 + 400 * Math.random());
    } else {
      PlayerContainer.filters = defaultFilters;
      animate();
    }
  };

  setTimeout(() => {
    iter(1 + 4 * Math.random());
  }, 10000 + 10000 * Math.random());
};

animate();

PlayerContainer.addChild(videoSprite);

export default PlayerContainer;
