var leveljs = require('level-js')
var levelup = require('levelup')
var fs = require('ws-level-filesystem')

var db = levelup('level-filesystem', { db: leveljs })
module.exports = fs(db)
