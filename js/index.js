import Game from './game.js'

let canvasNode = document.createElement("canvas")
let width = window.innerWidth
let height = window.innerHeight

canvasNode.width = width - 9
canvasNode.height = height - 9

canvasNode.classList.add("canvas")

document.body.appendChild(canvasNode)

let ctx = canvasNode.getContext("2d")

let game = new Game(width, height)
game.draw(ctx)

let lastTime = 0;

function GameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    ctx.clearRect(0,0,width,height)

    game.update(deltaTime)
    game.draw(ctx)
}

setInterval(GameLoop, 100)