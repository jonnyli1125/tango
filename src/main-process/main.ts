import { app, BrowserWindow } from "electron";
import * as fs from "fs";
import * as path from "path";
import "reflect-metadata";
import { createConnection } from "typeorm";

let mainWindow: Electron.BrowserWindow | null = null;

const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;

const SQLITE_DATABASE = path.resolve(__dirname, "./tango.sqlite");

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

  if (!fs.existsSync(SQLITE_DATABASE)) {
    fs.closeSync(fs.openSync(SQLITE_DATABASE, "w"));
  }

  createConnection({
    database: SQLITE_DATABASE,
    entities: TYPEORM_ENTITIES, // provided by webpack
    logging: true,
    type: "sqlite"
  });
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
