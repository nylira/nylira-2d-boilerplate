(function() {
'use strict'

//==============================================================================
// Modules

var P = require('pixi.js')
var maximize = require('nylira-maximize')

//==============================================================================
// Variables

var GAME = {
  w: 2880
, h: 1000
, id: document.getElementById('gameCanvas')
}
var SCENES = {}

//==============================================================================
// Setup

function renderTest(scene) {
  var bar = new P.Graphics()
  bar.beginFill(0xFF0000)
  bar.lineStyle(2, 0x000000)
  bar.drawRect(200, 200, 200, 200)
  bar.endFill()
  scene.addChild(bar)
}

function setup() {
  GAME.renderer = P.autoDetectRenderer(GAME.w, GAME.h, {view: GAME.id})
  SCENES.primary = new P.Container({width: GAME.w, height: GAME.h})
  maximize(GAME.id, GAME.w, GAME.h)

  renderTest(SCENES.primary)
}

//==============================================================================
// Loop

function gameLoop() {
  requestAnimationFrame(gameLoop)
  GAME.renderer.render(SCENES.primary)
}

//==============================================================================
// Go

setup()
gameLoop()

}())
