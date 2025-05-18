const { app, BrowserWindow, ipcRenderer } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'comHandler.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true,
    },
  });

  win.loadURL('http://localhost:3000');
  ipcRenderer.send('resize', (win.width, win.height));
}

app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
