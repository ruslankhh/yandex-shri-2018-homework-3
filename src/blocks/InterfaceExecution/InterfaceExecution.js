import * as PIXI from 'pixi.js';
import parser from 'ua-parser-js';

import data from '../../data/data';

const InterfaceExecution = new PIXI.Text('', {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
});

const ua = parser(window.navigator.userAgent);
const isSupported = !['firefox', 'yandex'].includes(ua.browser.name.toLowerCase());

const texts = isSupported
  ? data.functions
  : data.styles;

InterfaceExecution.position.set(400, 60);

const animate = () => {
  const InterfaceExecutions = texts.map(func =>
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

  const indexFunction = Math.round((InterfaceExecutions.length - 1) * Math.random());
  const InterfaceExecutionArray = InterfaceExecutions[indexFunction];
  let currentLine = 0;
  let currentFlash = 0;

  const iter = () => {
    if (currentLine < InterfaceExecutionArray.length) {
      InterfaceExecution.text = InterfaceExecution.text
        ? `${InterfaceExecution.text}${InterfaceExecutionArray[currentLine]}`
        : InterfaceExecutionArray[currentLine];

      currentLine = currentLine + 1;
      setTimeout(iter, 100);
    } else if (InterfaceExecution.alpha !== 0 && currentFlash < 5) {
      InterfaceExecution.alpha = 0;

      currentFlash = currentFlash + 1;
      setTimeout(iter, 200);
    } else if (currentFlash < 5) {
      InterfaceExecution.alpha = 1;
      currentFlash = currentFlash + 1;
      setTimeout(iter, 200);
    } else {
      InterfaceExecution.text = '';
      InterfaceExecution.alpha = 1;
      animate();
    }
  };

  setTimeout(() => {
    iter(1 + 4 * Math.random());
  }, 10000 * Math.random());
};

animate();

export default InterfaceExecution;
