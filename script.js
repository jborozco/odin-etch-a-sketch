//1. Set 4x4 squares in a canvas
let canvas = document.getElementById('canvas');


function FillCanvas(PxlNb) {
    for (let i = PxlNb; i > 0; i--) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        canvas.appendChild(pixel);
        console.log(i);

    }
}

FillCanvas(16);

//2. On click + hover on a div, the squares turn black


//3. Choose the number of squares in the canvas and reset the grid, 
//add a limit of 64px


//4. Add a button to clear/reset the canvas


//5. Add a switch to a new behavior that "erase" by returning the div to white


//6. Add a switch to a new behavior that color the div with random 
//colors


//7. Add a switch to a new behavior that color the div that add 10% black on click + hover  