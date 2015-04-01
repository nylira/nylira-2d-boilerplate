(function() {
'use strict'

//==============================================================================
// Modules

var PIXI = require('pixi.js')
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST

var maximize = require('nylira-maximize')

//==============================================================================
// Variables

var Game = {
  w: 1920
, h: 1080
, id: document.getElementById('gameCanvas')
}
var Scenes = {}

var Textures = {
  grass: new PIXI.Texture.fromImage('./img/texture_grass_02.png')
}

//==============================================================================
// Setup

function renderGrass(scene) {
  var grass = new PIXI.extras.TilingSprite(Textures.grass)
  grass.width = Game.w
  grass.height = Game.h
  scene.addChild(grass)
}

function renderSquare(scene) {
  var bar = new PIXI.Graphics()
  bar.beginFill(0x88CC88)
  bar.lineStyle(2, 0x000000)
  bar.drawRect(50, 50, 200, 200)
  bar.endFill()
  scene.addChild(bar)
}

function renderLine(scene) {
  var line = new PIXI.Graphics()
  line.beginFill()
  line.lineStyle(8,0x000000)
  line.moveTo(300, 50)
  line.lineTo(600, 400)
  scene.addChild(line)
}

function setup() {
  Game.renderer = PIXI.autoDetectRenderer(Game.w, Game.h, {view: Game.id})
  Scenes.primary = new PIXI.Container({width: Game.w, height: Game.h})
  Scenes.primary.scale.x = 2
  Scenes.primary.scale.y = 2
  maximize(Game.id, Game.w, Game.h)

  renderGrass(Scenes.primary)
  renderSquare(Scenes.primary)
  renderLine(Scenes.primary)
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

  Game.renderer.render(Scenes.primary)

  requestAnimationFrame(gameLoop)
}

//==============================================================================
// Go

setup()
gameLoop()

}())
