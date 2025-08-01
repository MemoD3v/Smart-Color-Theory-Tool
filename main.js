const { app, BrowserWindow } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadFile("index.html");
}
app.whenReady().then(createWindow);