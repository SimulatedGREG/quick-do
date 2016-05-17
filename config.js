'use strict'

const path = require('path')
const pkg = require('./app/package.json')
const platform = process.env.PLATFORM_TARGET || 'all'

let config = {
  // Enable electron's devtron devtools extension in development
  devtron: true,

  // webpack-dev-server port
  port: 9080,

  // Enable vue-devtools in development
  vueDevTools: true,

  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
  building: {
    'app-version': pkg.version,
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, 'app'),
    icon: path.join(__dirname, 'app/icons/icon'),
    ignore: /node_modules|src|main.html|icons/,
    name: pkg.name,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform
  }
}

module.exports = config
