

//1. Set pixels in a canvas
let canvas = document.getElementById('canvas');

//1.2 Choose the number of squares in the canvas and reset the grid, 
//add a limit of 64px

let pixelSize = 0;

function getResolution(PixelsByLine) { // activated when change range input

    //Show the number of px
    document.getElementById("resolutionValue").innerHTML = `${PixelsByLine}x${PixelsByLine}px`;

    //reset the px number
    canvas.innerHTML = '';


    //Set up px in canvas
    pixelSize = PixelsByLine / (PixelsByLine * PixelsByLine) * 100;
    FillCanvas(PixelsByLine * PixelsByLine);


    function FillCanvas(PxlNb) {
        for (let i = PxlNb; i > 0; i--) {
            let pixel = document.createElement("div");
            pixel.className = `pixel`;
            pixel.style.flex = `1 0 ${pixelSize}%`;
            canvas.appendChild(pixel);
        }
    }

    //Reset pixels array
    let pixels = document.getElementsByClassName('pixel');
    let ClkPixelsArray = [...pixels];

    //On click + hover on a div, the squares turn black
    console.log(ClkPixelsArray);
    ClkPixelsArray.forEach(item => {
        item.addEventListener('mouseover', event => {
            if (mouseDown == true) {
                darkPixel(event);
            }
        })
    });


}

//Initialise the grid at 8
getResolution(8)






//2.1  function switch color
function darkPixel(event) {
    if (mouseDown) {
        event.target.classList.add("dark-pixel");
    }
}

// function erase color
function erasePixel(event) {
    if (mouseDown) {
        event.target.className = "pixel";;
    }
}
// function erase color


//Listen if the mouse is down
let mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    mouseDown = 0;;
}

let pixels = document.getElementsByClassName('pixel');
//3. Add a button to erase the canvas
let eraseBtn = document.getElementById('clear');
eraseBtn.addEventListener('click', event => {
    for (pixel of pixels) {
        pixel.classList.remove('dark-pixel')
    }
})



//4. Add a switch to a new behavior that "erase" by returning the div to white


//5. Add a switch to a new behavior that color the div with random 
//colors


//6. Add a switch to a new behavior that color the div that add 10% black on click + hover  