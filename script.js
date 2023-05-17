

//1. Set 4x4 squares in a canvas
let canvas = document.getElementById('canvas');

//3. Choose the number of squares in the canvas and reset the grid, 
//add a limit of 64px
let PixelsByLine = prompt("Choose your resolution");
let pixelSize = PixelsByLine / (PixelsByLine * PixelsByLine) * 100;
FillCanvas(PixelsByLine * PixelsByLine);

function FillCanvas(PxlNb) {
    for (let i = PxlNb; i > 0; i--) {
        let pixel = document.createElement("div");
        pixel.className = `pixel`;
        pixel.style.flex = `1 0 ${pixelSize}%`;
        canvas.appendChild(pixel);
    }
}



//2. On click + hover on a div, the squares turn black
let pixels = document.getElementsByClassName('pixel');
let pixelsArray = [...pixels];





//2.1  function switch color
function darkPixel(event) {
    if (mouseDown) {
        event.target.classList.add("dark-pixel");
    }
}

//listen if the mouse is down
let mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}

//2.1 switch color function on click + mouseover

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




//4. Add a button to erase the canvas
let eraseBtn = document.getElementById('erase');
eraseBtn.addEventListener('click', event => {
    for (pixel of pixels) {
        pixel.classList.remove('dark-pixel')
    }
})



//5. Add a switch to a new behavior that "erase" by returning the div to white


//6. Add a switch to a new behavior that color the div with random 
//colors


//7. Add a switch to a new behavior that color the div that add 10% black on click + hover  