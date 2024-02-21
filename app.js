

const container = document.querySelector(".container")
const parent = document.querySelector("#parent")
const child = document.querySelector(".child")
const reset = document.querySelector("#reset")
const grid = document.querySelector("#grid")
let DEFAULT = 16;
let userSize;



grid.addEventListener("input", () => {
    var userSize = prompt("enter grid size");
    return userSize;
});







let squareSize = `${DEFAULT}`;

function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        container.appendChild(createDiv(container.clientWidth / gridSize));
      }
    }
}


createGrid(squareSize);



let isMouseDown = false;



// when mouse is down and mouse is moving and both contain box class change color to black
container.addEventListener("mousedown", function (event) {
  isMouseDown = true;
  if (isMouseDown && event.target.classList.contains("box")) {
      event.target.style.backgroundColor = "black";
  }
  event.preventDefault();
});

container.addEventListener("mousemove", function (event) {
    if (isMouseDown && event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "black";
    }
    event.preventDefault();
  });
  



// when mouse is up and mouse has left active box
container.addEventListener("mouseup", function () {
  isMouseDown = false;
});

container.addEventListener("mouseleave", function () {
    isMouseDown = false;
  });


// reset all box colors to null (white)
function Reset(){
    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = null;
    });
}



/*
document.querySelectorAll('.box').forEach(item => {
    if(mouseDown === true){
        item.addEventListener("mousedown", () => {
            item.style.backgroundColor = "#AA0000";
            mouseDown = false
        }); 
    }
    else{
        mouseDown = true
    }
})


document.querySelectorAll('.box').forEach(item => {
item.addEventListener("mouseup", () => {
    mouseDown = false;
    })
})





// mousehovering = true
// for each item in box
//      if mousehovering = true 
//          when mouse is hovering 
//              change box color















item.addEventListener("click", () => {


    if (mouseover === true){
        
        item.style.backgroundColor = "#AA0000";
        console.log("if");
        mouseover = false;
        
    }
    else{
        
        item.style.backgroundColor = null;
        console.log("else");
        mouseover = true;
        
        
    }
})*/
