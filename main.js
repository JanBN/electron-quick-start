const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const fs = require('fs');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(
    {
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        nativeWindowOpen: true,
      },
    });

  mainWindow.loadURL("http://www.pdfpdf.com/samples.html");
  mainWindow.setMenu(null);
  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});