require('es5-shim')
require('es5-shim/es5-sham')
require('babel-polyfill')
require('console-polyfill')
require('./styles/index.scss')
const $ = require('$')

// install plugins
require('./plugins')($)