const { app, BrowserWindow } = require('electron/main');
const path = require('path');

class ElectronAPP {
  application;

  createWindow() {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    });
    win.loadURL('http://localhost:3000');
  }
  constructor() {
    this.application = app;
    this.application.whenReady().then(() => {
      this.createWindow();
      this.application.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          this.createWindow();
        }
      });
    });
    this.application.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        this.application.quit();
      }
    });
  }
}

const electronApp = new ElectronAPP();
