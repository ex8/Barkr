const {app, BrowserWindow} = require('electron');

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        resizable: false
    });
    mainWindow.loadURL(`http://localhost:3000`);
    mainWindow.setMenu(null);
    mainWindow.on(`closed`, () => mainWindow = null);
}

app.on(`ready`, createWindow);

app.on(`window-all-closed`, () => {
    if (process.platform !== `darwin`) {
        app.quit();
    }
});

app.on(`activate`, () => {
    if (mainWindow === null) {
        createWindow();
    }
});
