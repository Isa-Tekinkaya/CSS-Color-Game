let numSquares = 6;
let squares = document.querySelectorAll(".square");
let colors = randomColorsSquares(numSquares);
let colorDisplay = document.querySelector(".pickedColor");
let h1 = document.getElementsByTagName("h1")[0];
let resultDisplay = document.querySelector(".resultDisplay");
let easyButton = document.querySelector(".easyButton");
let hardButton = document.querySelector(".hardButton");
let resetButton = document.querySelector(".reset");
let pickedColor = pickColor();


colorDisplay.textContent = pickedColor

colorSquares();

hardButton.addEventListener("click",function(){
    hard()
});

easyButton.addEventListener("click",function(){
    easy()
});

resetButton.addEventListener("click",function(){
    reset()
});

function colorSquares(){
    for(i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor
            console.log(clickedColor, pickedColor)
            
            if(clickedColor === pickedColor){
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resultDisplay.classList.add("resultDisplay1")
                resultDisplay.classList.remove("resultDisplay2")
                resultDisplay.textContent = "Good job!";
                
            
            }else{
                this.style.backgroundColor = "black"
                resultDisplay.classList.add("resultDisplay2")
                resultDisplay.textContent = "Try again";
                
            }
        })
    }
}

function hard(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = randomColorsSquares(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
    }        
    resultDisplay.textContent = "";
    h1.style.backgroundColor = ("#232323")   
}

function easy(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = randomColorsSquares(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.backgroundColor = ("black")
        }
    }        
    resultDisplay.textContent = "";
    h1.style.backgroundColor = ("#232323")   
}

function reset(){
    if(numSquares === 3){
        numSquares = 3
    }else if(numSquares === 6){
        numSquares = 6
    }
        colors = randomColorsSquares(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.backgroundColor = ("black")
            }
    } 
            resultDisplay.textContent = "";
            resultDisplay.classList.remove("resultDisplay2")
            resultDisplay.classList.remove("resultDisplay1");
            h1.style.backgroundColor = ("#232323")
}

function changeColors(color){
    for(i = 0; i < numSquares; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
        let random = Math.floor(Math.random() *colors.length)
        return colors[random]
}
function randomColors(){
    let red = Math.floor(Math.random() *256)
    let green = Math.floor(Math.random() *256);
    let blue = Math.floor(Math.random() *256);
    return "rgb(" + red + ", " + green +", "  + blue + ")";
}

function randomColorsSquares(num){
    let arr = [];
    for(i = 0; i < num; i++){
        arr.push(randomColors())
    }   return arr
}
