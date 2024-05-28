const rows = 10
const columns = 45

const container = document.getElementById('container')

let frogLocation = (rows - 1) * columns + Math.floor(columns / 2)

function initialLayout(){
    for (let i = 0 ; i < rows ; i++) {
        for (let j = 0 ; j < columns ; j++) {
            const elem = document.createElement('div')
            container.appendChild(elem)
        }
    }

    const divs = container.children

    // Top row is grass
    for (let i = 0 ; i < columns ; i++) {
        divs[i].classList.add('grass')
    }    

    // Bottom row is grass
    for (let i = 0 ; i < columns ; i++) {
        divs[(rows - 1) * columns + i].classList.add('grass')
    }    

    // Draw frog
    divs[frogLocation].classList.add('frog')
}

initialLayout()

