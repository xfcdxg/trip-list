const path = require('path')

const resolve = path.resolve

const ROOT_PATH = resolve(__dirname)
const PAGES_PATH = resolve(ROOT_PATH, 'pages')
const ASSETS_PATH = resolve(ROOT_PATH, 'assets')
const MODULES_PATH = resolve(ROOT_PATH, 'node_modules')

module.exports = {
  ROOT_PATH: ROOT_PATH,
  PAGES_PATH: PAGES_PATH,
  ASSETS_PATH: ASSETS_PATH,
  MODULES_PATH: MODULES_PATH
}
