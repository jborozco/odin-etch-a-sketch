//1. Set 4x4 squares in a canvas
let canvas = document.getElementById('canvas');


function FillCanvas(PxlNb) {
    for (let i = PxlNb; i > 0; i--) {
        let pixel = document.createElement("div");
        pixel.className = `pixel pixel-${i}`;
        canvas.appendChild(pixel);
    }
}

FillCanvas(16);

//2. On click + hover on a div, the squares turn black

let pixels = document.getElementsByClassName('pixel');
let pixelsArray = [...pixels];



//listen if the mouse is down
let mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}

//2.1 switch color function on click
function darkPixel(event) {
    if (mouseDown) {
        event.target.classList.add("dark-pixel");
    }
}


pixelsArray.forEach(item => {
    item.addEventListener('mouseover', event => {
        if (mouseDown == true) {
            darkPixel(event);
        }
    })
    item.addEventListener('click', event => {
        darkPixel(event);

    })
});









//3. Choose the number of squares in the canvas and reset the grid, 
//add a limit of 64px


//4. Add a button to clear/reset the canvas


//5. Add a switch to a new behavior that "erase" by returning the div to white


//6. Add a switch to a new behavior that color the div with random 
//colors


//7. Add a switch to a new behavior that color the div that add 10% black on click + hover  