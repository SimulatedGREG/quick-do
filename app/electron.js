'use strict'

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const globalShortcut = electron.globalShortcut

let mainWindow, quickAdderWindow, config = {}

if(process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
  config.quickAdderUrl = `http://localhost:${config.port}/quick-adder.html`
} else {
  config.devtron = false
  config.url = 'file://' + __dirname + '/dist/index.html'
  config.quickAdderUrl = 'file://' + __dirname + '/dist/quick-adder.html'
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    resizable: false,
    width: 340
  })

  mainWindow.loadURL(config.url)
  if(process.env.NODE_ENV === 'development') mainWindow.webContents.openDevTools()

  if(config.devtron) BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))
  else BrowserWindow.removeDevToolsExtension('devtron')

  ipcMain.on('new-todo', (e, todo) => {
    mainWindow.webContents.send('add-todo', todo)
  })

  console.log('mainWindow opened')

  createQuickAdderWindow()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('activate', () => {
  if (mainWindow === null)
    createWindow()
})

function createQuickAdderWindow () {
  quickAdderWindow = new BrowserWindow({
    alwaysOnTop: true,
    center: true,
    height: 51,
    frame: false,
    resizable: false,
    show: false,
    width: 340
  })

  quickAdderWindow.setTitle('Quick-Adder')

  quickAdderWindow.on('blur', () => {
    quickAdderWindow.hide()
  })

  quickAdderWindow.loadURL(config.quickAdderUrl)
  if(process.env.NODE_ENV === 'development') mainWindow.webContents.openDevTools()

  const cs = globalShortcut.register('Control+Space', () => {
    quickAdderWindow.show()
    quickAdderWindow.focus()
  })

  if (!cs) console.log('registration failed')
}

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
