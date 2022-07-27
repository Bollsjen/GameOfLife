export default class Game {
    constructor(width, height){
        this.width = width
        this.height = height

        this.cellSize = 40

        this.grid = []

        this.start()
    }

    start(){
        for(let y = 0; y < (this.height / this.cellSize); y++){
            this.grid.push([])
            for(let x = 0; x < (this.width / this.cellSize); x++){                
                this.grid[y][x] = false
            }
        }

        this.grid[24][60] = true
        this.grid[25][62] = true
        this.grid[26][60] = true
        this.grid[26][61] = true
        this.grid[26][60] = true

        console.log(this.grid[0][0])

        
    }

    update(deltaTime) {
        let newGrid = []

        for(let y = 0; y < (this.height / this.cellSize); y++){
            newGrid.push([])
            for(let x = 0; x < (this.width / this.cellSize); x++){                
                newGrid[y][x] = false
            }
        }

        for(let y = 0; y < (this.height / this.cellSize); y++){
            for(let x = 0; x < (this.width / this.cellSize); x++){
                let closeAlive = 0
                for(let j = -1; j < 3; j++){
                    for(let i = -1; i < 3; i++){                        
                        if(j != 0 && i != 0){
                            if((y + j > 0 && x + i > 0) && (y + j < this.grid.length && x + i < this.grid[y].length)){
                                if(this.grid[y + j][x + i] == true){
                                    closeAlive++
                                }
                            }
                        }
                    }
                }

                if(this.grid[y][x] == true){                       
                    if(closeAlive == 2 || closeAlive == 3){
                        newGrid[y][x] = true;
                    }
                }else{
                    if(closeAlive == 3){
                        newGrid[y][x] = true
                    }
                }

            }
        }

        this.grid = newGrid
        
    }

    draw(ctx){
        for(let y = 0; y < (this.height / this.cellSize); y++){
            for(let x = 0; x < (this.width / this.cellSize); x++){
                if(this.grid[y][x] == false){
                    ctx.fillStyle = "rgb(0,0,0)"
                    ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize)
                }else {
                    ctx.fillStyle = "rgb(255,255,255)"
                    ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize)
                }
            }
        }
    }
}