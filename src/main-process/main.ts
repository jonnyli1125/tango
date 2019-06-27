import { app, BrowserWindow } from "electron";
import * as path from "path";
import "reflect-metadata";
import { createConnection } from "typeorm";

let mainWindow: Electron.BrowserWindow;

const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: WINDOW_HEIGHT,
    webPreferences: {
      nodeIntegration: true
    },
    width: WINDOW_WIDTH
  });
  mainWindow.loadFile(path.join(__dirname, "../static/index.html"));
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  createConnection();
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
