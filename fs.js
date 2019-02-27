const leveljs = require('level-js')
const levelup = require('levelup')
const fs = require('ws-level-filesystem')

const db = levelup(leveljs('level-filesystem'))

module.exports = fs(db)
