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

    //turtle
    {
        spacing: [0, 2, 0, 2, 0, 2, 0, 4],
        color: '#de004',
        size: grid,
        shape: 'circle',
        speed: -1
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

    }

    
]