(function() {
'use strict'

//==============================================================================
// Modules

var PIXI = require('pixi.js')
var maximize = require('nylira-maximize')

//==============================================================================
// Variables

var GAME = {
  w: 1920
, h: 1080
, id: document.getElementById('gameCanvas')
}
var SCENES = {}

var TEXTURES = {
  grass: new PIXI.Texture.fromImage('./img/texture_grass_02.png')
}

//==============================================================================
// Setup

function renderGrass(scene) {
  var grass = new PIXI.extras.TilingSprite(TEXTURES.grass)
  grass.width = GAME.w
  grass.height = GAME.h
  scene.addChild(grass)
}

function renderTest(scene) {
  var bar = new PIXI.Graphics()
  bar.beginFill(0x88CC88)
  bar.lineStyle(2, 0x000000)
  bar.drawRect(200, 200, 200, 200)
  bar.endFill()
  scene.addChild(bar)
}

function setup() {
  GAME.renderer = PIXI.autoDetectRenderer(GAME.w, GAME.h, {view: GAME.id})
  SCENES.primary = new PIXI.Container({width: GAME.w, height: GAME.h})
  maximize(GAME.id, GAME.w, GAME.h)

  renderGrass(SCENES.primary)
  renderTest(SCENES.primary)
}

//==============================================================================
// Loop

function update(dt) {
  // do your lerping here
  // console.log('deltaTime', dt)
  return dt
}

var time
function gameLoop() {
  var now = new Date().getTime()
  var dt = now - (time || now)
  dt = dt / 1000 // change units to seconds

  time = now

  // do stuff every frame
  update(dt)

  GAME.renderer.render(SCENES.primary)

  requestAnimationFrame(gameLoop)
}

//==============================================================================
// Go

setup()
gameLoop()

}())
