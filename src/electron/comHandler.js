const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronSize', {
  onWindowSize: (callBack) => {
    ipcRenderer.on('resize', (width, height) => {
      callBack(width, height);
    });
  },
});
