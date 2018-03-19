export default {
  styles: [
    `.App {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%;
    }`,
    `.Player {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    
      &--browser-firefox {
        display: block;
        filter:
          grayscale(1)
          brightness(1)
          sepia(1)
          hue-rotate(-50deg)
          saturate(4)
          contrast(2);
      }
    }`
  ],
  functions: [
    `const InterfaceExecutions = data.functions.map(func =>
      func.toString().toUpperCase().split('\n')
        .map(text => {
          if (text.length > 0) {
            const lineLength = 36;
            let newText = '';
            for (let i = 0; i < text.length / lineLength; i++) {
              newText = \`\${newText}\${text.slice(i * lineLength, (i + 1) * lineLength)}\n\`;
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
          ? \`\${InterfaceExecution.text}\${InterfaceExecutionArray[currentLine]}\`
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
    }, 10000 * Math.random());`,
    `const fps = tiker.FPS.toFixed(3).toString().toUpperCase();
  
    InterfaceFPS.text = \`FPS: \${fps}\`;
  
    setTimeout(animate, 100);`,
    `const ua = parser(window.navigator.userAgent);
    const os = \`\${ua.os.name} \${ua.os.version}\`.toUpperCase();
    const engine = \`\${ua.engine.name} \${ua.engine.version}\`.toUpperCase();
    const browser = \`\${ua.browser.name} \${ua.browser.version}\`.toUpperCase();
  
    InterfaceUserAgent.text = \`OS: \${os}\nENGINE: \${engine}\nBROWSER: \${browser}\`;
  
    setTimeout(animate, 100);`
  ]
};
