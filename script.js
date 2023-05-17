let canvas = document.getElementById('canvas');
let pixelSize = 0;

function FillCanvas(PxlNb) { //loop to fill up the canvas with pixels
    for (let i = PxlNb; i > 0; i--) {
        let pixel = document.createElement("div");
        pixel.className = `pixel`;
        pixel.style.flex = `1 0 ${pixelSize}%`;
        canvas.appendChild(pixel);
    }
}

function setCanvas(PixelsByLine) { // Activated when change range input

    //reset the px number
    canvas.innerHTML = '';

    //Show the canvas resolution
    let resolution = document.getElementById("resolutionValue");
    resolution.innerHTML = `${PixelsByLine}x${PixelsByLine}px`;


    //Set up px in canvas
    pixelSize = PixelsByLine / (PixelsByLine * PixelsByLine) * 100;
    FillCanvas(PixelsByLine * PixelsByLine);

    //Save the new pixels array after a reset 
    let pixels = document.getElementsByClassName('pixel');
    let ClkPixelsArray = [...pixels];

    //On click + hover on a div, the squares turn black
    ClkPixelsArray.forEach(item => {
        item.addEventListener('mousedown', event => {
            modifyPixel(event);
        })
        item.addEventListener('mouseover', event => {
            if (mouseDown) {
                modifyPixel(event);
            }
        })
    });

} // End of setCanvas()


//Initialise the grid at 8
setCanvas(8)






// interact with pixel dependin on the tool selected
function modifyPixel(event) {
    if (canvas.className == 'eraser') { //erase on click
        event.target.className = "pixel";
        event.target.style.backgroundColor = "";
    }
    else if (canvas.className == 'color') { //display random color on click
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
    }
    else { // make it dark (default)
        event.target.classList.add("dark-pixel");
        event.target.style.backgroundColor = "";
    }
}

// function clear canvas
function erasePixel(event) {
    event.target.className = "pixel";
}


//Listen if the mouse is down
let mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    mouseDown = 0;
}

let pixels = document.getElementsByClassName('pixel');

//3. Add a button to erase the canvas
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', event => {
    for (pixel of pixels) {
        pixel.classList.remove('dark-pixel')
    }
})

//Toolkit buttons
let penBtn = document.getElementById('pen');
let eraserBtn = document.getElementById('eraser');
let colorBtn = document.getElementById('color');
let buttons = document.getElementsByClassName('button')

//Set up canvas to pen mode
penBtn.addEventListener('click', event => {
    canvas.className = ``;
    for (button of buttons) { button.classList.remove('active'); }
    penBtn.classList.add('active');

})

//Set up canvas to eraser mode

eraserBtn.addEventListener('click', event => {
    canvas.className = `eraser`;
    for (button of buttons) { button.classList.remove('active'); }
    eraserBtn.classList.add('active');
})

//Set up canvas to randomcolor mode
colorBtn.addEventListener('click', event => {
    canvas.className = `color`;
    for (button of buttons) { button.classList.remove('active'); }
    colorBtn.classList.add('active');

})


//5. Add a switch to a new behavior that color the div with random 
//colors


//6. Add a switch to a new behavior that color the div that add 10% black on click + hover  