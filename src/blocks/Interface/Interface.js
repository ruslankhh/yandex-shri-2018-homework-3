import * as PIXI from 'pixi.js';
import parser from 'ua-parser-js';

import './Interface.css';

const Interface = new PIXI.Container();
const ticker = PIXI.ticker.shared;

const textOptions = {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
};

const textFPS = new PIXI.Text('', textOptions);
const textUA = new PIXI.Text('', textOptions);
const textFunction = new PIXI.Text('', textOptions);

textFPS.position.set(20);
textUA.position.set(20, 420);
textFunction.position.set(400, 60);

Interface.addChild(
  textFPS,
  textUA,
  textFunction
);

const animate = () => {
  const fps = ticker.FPS.toFixed(3).toString().toUpperCase();
  const ua = parser(window.navigator.userAgent);
  const os = `${ua.os.name} ${ua.os.version}`.toUpperCase();
  const engine = `${ua.engine.name} ${ua.engine.version}`.toUpperCase();
  const browser = `${ua.browser.name} ${ua.browser.version}`.toUpperCase();

  textFPS.text = `FPS: ${fps}`;
  textUA.text = `OS: ${os}\nENGINE: ${engine}\nBROWSER: ${browser}`;

  setTimeout(animate, 100);
};

const animateTextFunction = () => {
  const textFunctions = [animate, animateTextFunction]
    .map(func =>
      func.toString().toUpperCase().split('\n')
        .map(text => {
          if (text.length > 0) {
            const lineLength = 36;
            let newText = '';
            for (let i = 0; i < text.length / lineLength; i++) {
              newText = `${newText}${text.slice(i * lineLength, (i + 1) * lineLength)}\n`;
            }

            return newText;
          } else {
            return text;
          }
        })
    );

  const indexFunction = Math.round((textFunctions.length - 1) * Math.random());
  const textFunctionArray = textFunctions[indexFunction];
  let currentLine = 0;
  let currentFlash = 0;

  const iter = () => {
    if (currentLine < textFunctionArray.length) {
      textFunction.text = textFunction.text
        ? `${textFunction.text}${textFunctionArray[currentLine]}`
        : textFunctionArray[currentLine];

      currentLine = currentLine + 1;
      setTimeout(iter, 100);
    } else if (textFunction.alpha !== 0 && currentFlash < 5) {
      textFunction.alpha = 0;

      currentFlash = currentFlash + 1;
      setTimeout(iter, 200);
    } else if (currentFlash < 5) {
      textFunction.alpha = 1;
      currentFlash = currentFlash + 1;
      setTimeout(iter, 200);
    } else {
      textFunction.text = '';
      textFunction.alpha = 1;
      animateTextFunction();
    }
  };

  setTimeout(() => {
    iter(1 + 4 * Math.random());
  }, 10000 * Math.random());
};

animate();
animateTextFunction();

export default Interface;
