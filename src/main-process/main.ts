import { app, BrowserWindow } from "electron";
import * as path from "path";

import { IS_OSX } from "./constants/environment";
import { openDatabase } from "./database";

let mainWindow: Electron.BrowserWindow | null = null;

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

  openDatabase();
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (!IS_OSX) {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
