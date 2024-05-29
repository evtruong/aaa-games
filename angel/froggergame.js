const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 48;
const girdGap = 10;
function Sprite(props){
    Object.assign(this, props);
}
Sprite.prototype.render = function(){
    context.fillStyle = this.color;
    if (this.shape == 'rect'){
        context.fillRect(this.x, this.y + gridgap / 2, this.size, grid - gridGap);
    }
    else{
        context.beginPath();
        context.arc(
            this.x + this.size / 2, this.y + this.size / 2,
            this.size / 2 -gridGap / 2, 0, 2 *  Math.PI
        );
        context.fill();
    }
}
//frogger
const frogger = new Sprite({
    x: grid * 6,
    y: grid * 13,
    color: 'greenyellow',
    size: grid,
    shape: 'circle'
});
const scoredFroggers = [];
const patterns = [
    null,
    {
        spacing: [2],
        color: '#c55843',
        size: grid * 4,
        shape: 'rect',
        speed: 0.75
    },
    //log
    {
        spacing: [2],
        color: '#c55843',
        size: grid * 4,
        shape: 'rect',
        speed: 0.75
    },
    //turtle
    {
        spacing: [0, 2, 0, 2, 0, 2, 0, 4],
        color: '#de004',
        size: grid,
        shape: 'circle',
        speed: -1
    },
    // long log
  {
    spacing: [2],
    color: '#c55843',
    size: grid * 7,
    shape: 'rect',
    speed: 1.5
  },
  // log
  {
    spacing: [3],
    color: '#c55843',
    size: grid * 3,
    shape: 'rect',
    speed: 0.5
  },
    //beach
    null,
    //truck
    {
        spacing: [3, 8],
        color: '#c2c4da',
        size: grid * 2,
        shape: 'rect',
        speed: -1
    },
    //fast car
    {
        spacing: [14],
        color: '#c2c4da',
        size: grid,
        shape: 'rect',
        speed: 0.75
    },
    
    //car
    {
        spacing: [3,3,7],
        color: 'de3cdd',
        size: grid,
        shape: 'rect',
        speed: -0.75
    },
    //bulldozer
    {
        spacing: [3,3,7],
        color: '#0bcb00',
        size: grid,
        shape: 'rect',
        speed: 0.5
      },
    
    //car2
    {
        spacing:[4],
        color: '#e5e401',
        size: grid,
        shape: 'rect',
        speed: -0.5
    },
    
    //startzone
    null,
];
const rows = [];
for (let i = 0; 1 < patterns.length; i++) {
    rows[1]=[];
    let x = 0;
    let index = 0;
    const pattern = patterns [i];
    if (!pattern) {
        continue;
      }
    let totalPatternWidth =
        pattern.spacing.reduce((acc, space) => acc + space, 0) * grid +
        pattern.spacing.length * pattern.size;
        let endX = 0;
        while(endX < canvas.width){
            endX += totalPatternWidth
        }
        endX += totalPatternWidth;
 
  while (x < endX) {
    rows[i].push(new Sprite({
      x,
      y: grid * (i + 1),
      index,
      ...pattern
    }));
    const spacing = pattern.spacing;
    x += pattern.size + spacing[index] * grid;
    index = (index + 1) % spacing.length;
  }
}
function loop(){
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = '#000047';
    context.fillRect(0, grid, canvas.width, grid * 5)
    context.fillStyle = '1ac300'
    context.fillRect(0, grid, canvaswidth)
    context.fillRect(0, grid, 5, grid);
    context.fillRect(canvas.wdith-5, grid, 5, grid)
    for(let i=0; i<4; i++){
        context.fillRect(grid + grid * 3 * i, grid, grid * 2, grid);
    }
    context.fillStyle = '#8500da',
    context.fillRect(0,7 * grid, canvas.width, grid);
    context.fillRect(0, canvas.height - grid * 2, canvas.width, grid);
    for(let r = 0; r < rows.length; r++){
        const row = rows[r];
        for(let i=0; i<rows.length; i++){
            const sprite = row[1]
            sprite.x += sprite.speed;
            sprite.render();
            if(sprite.speed<0 && sprite.x < 0 - sprite.size){
                let rightMostSprite = sprite;
                for(let j = 0; j < row.length; j++){
                    if(row[j].x>rightMostSprite.x){
                        rightMostSprite=row[j];
                    }
                }
                const spacing = patterns[r].spacing;
                sprite.x=
                    rightMostSprite.x + rightMostSprite.size +
                    spacing[rightMostSprite.index] * grid;
                sprite.index = (rightMostSprite.index + 1)%spacing.length;
            }

            if(sprite.speed > 0 && sprite.x > canvas.width) {
                let leftMostSprite = sprite;
                for(let j = 0; j<row.length; j++){
                    if (row[j].x < leftMostSprite.x){
                        leftMostSprite = row[j];
                    }
                }
            const spacing = patterns[r].spacing;
                let index = leftMostSprite.index - 1;
                index = index >= 0 ? index : spacing.length - 1;
                sprite.x = leftMostSprite.x - spacing[index] * grid - sprite.size;
                sprite.index = index;    
            }
        }
    }

    //render frogger
    frogger.x += frogger.speed || 0;
    frogger.render();

    scoredFroggers.forEach(frog => frog.render());

    const froggerRow = frogger.y / grid - 1 | 0
    let collision = false;
    for (let i = 0; i < rows[froggerRow.length]; i++){
        let sprite = rows[froggerRow][i];

        if(frogger.x < sprite.x + sprite.size - gridGap &&
            frogger.x + grid  - gridGap > sprite.x &&
            frogger.y < sprite.y + grid &&
            frogger.y + grid > sprite.y) {
        collision = true;

        if (froggerRow > rows.length / 2){
            frogger.x = grid * 6;
            frogger.y = grid * 13;
        }

            else{
                frogger.speed = sprite.speed;
            }
        }

    }
    if(!collision){
        frogger.speed = 0;

        const col = (frogger.x + grid / 2) / grid | 0;
        if(froggerRow === 0 && col % 3 === 0 &&
        !scoredFroggers.find(frog => frog.x === col * grid)){
        scoredFroggers.push(new Sprite({
            ...frogger,
            x: col * grid,
            y: frogger.y + 5
            }));        
        }
        document.addEventListener('keydown', function(e) {
        //arrow key left
        if(e.which === 37){
            frogger.x -= grid;
        } 
        //arrow key right
        else if(e.which == 39){
            frogger.x += grid;
        }
        //arrow key up
        else if (e.which === 38) {
            frogger.y -= grid;
          }
        else if(e.which == 40){
            frogger.y += grid;
        }

        frogger.x = Math.min(Math.max(0, frogger.x), canvas.width - grid);
        frogger.y = Math.min(Math.max(grid, frogger.y), canvas.height - grid * 2);
        });

        requestAnimationFrame(loop);
    }

}

