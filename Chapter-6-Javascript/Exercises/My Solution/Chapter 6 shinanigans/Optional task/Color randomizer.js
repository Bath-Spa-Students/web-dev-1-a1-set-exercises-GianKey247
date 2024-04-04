var placeholder_RGB=null;
var numLives=3;
var livesElement =null; 
var outcomeElement=null;
var nextButtonElement=null;
var scoreElement=null;
var points = 0;
var colorButtons = null;
var restartButtonElement = null;
window.onload = () => 
    {
        //to find and document all the ID
        livesElement = document.querySelector('#Lives')
        outcomeElement = document.querySelector('#Answer')
        nextButtonElement = document.querySelector('#nextRound')
        scoreElement = document.querySelector('#Score')
        restartButtonElement = document.querySelector('#Restart')

        //set "hidden" to specific ID
        outcomeElement.setAttribute("hidden","hidden")
        nextButtonElement.classList.add("hidden")
        scoreElement.setAttribute("hidden","hidden")
        restartButtonElement.classList.add("hidden")

        // find all instances of class "box"
        colorButtons = document.querySelectorAll(".colorButton");
        // to select to all "box" and set a random color
        colorButtons.forEach(colorButton => {
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    // Set the background color of the current box
                colorButton.style.backgroundColor = randomColor;
        })
        //to find instances of id "Displayed_RGB"

        placeholder_RGB = document.querySelector('#Displayed_RGB')
        //picks a random box and displayed the RBG value
        placeholder_RGB.innerText=colorButtons[Math.floor(Math.random()*colorButtons.length)].style.backgroundColor

    }

//The procedure on how the colored button will work
function getButtonColor(button){
    var buttonBgColor = window.getComputedStyle(button).backgroundColor;
    //Displays the Answer / outcome
    outcomeElement.removeAttribute("hidden")
    //Check if the number of lives is 0
    if (numLives<=0)
        return
    //Checks if the next round button is hidden
    if (!nextButtonElement.classList.contains("hidden"))
        return

    //If the user picks the right color
    if (buttonBgColor == placeholder_RGB.innerText){
        outcomeElement.innerText="Your answer is : CORRECT"
        nextButtonElement.classList.remove("hidden")
        points+=1
    }
    //If the user picks the wrong color
    else{
        outcomeElement.innerText="Your answer is : WRONG"
        numLives-=1
        livesElement.innerText="Number of lives : " + numLives
        nextButtonElement.classList.remove("hidden")
    }
}

//The procedure on when the nextRound button will work
function nextRound(){
    //Check if the number of lives is 0 and display the appropriate elements
    if (numLives<=0){
        scoreElement.removeAttribute("hidden")
        scoreElement.innerText="Score : " + points
        outcomeElement.setAttribute("hidden","hidden")
        nextButtonElement.classList.add("hidden")
        restartButtonElement.classList.remove("hidden")
        return
    }
    // find all instances of class "coloredButtons"
    colorButtons = document.querySelectorAll(".colorButton");
    // to select to all "coloredButtons" and set a random color
    colorButtons.forEach(colorButton => {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            // Set the background color of the current coloredButton
            colorButton.style.backgroundColor = randomColor;
    })
    placeholder_RGB.innerText=colorButtons[Math.floor(Math.random()*colorButtons.length)].style.backgroundColor
    outcomeElement.setAttribute("hidden","hidden")
    nextButtonElement.classList.add("hidden")
    scoreElement.setAttribute("hidden","hidden")

}

function Restart(){
    restartButtonElement.classList.remove("hidden")
    colorButtons = document.querySelectorAll(".colorButton");
    // to select to all "box" and set a random color
    colorButtons.forEach(colorButton => {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            // Set the background color of the current box
            colorButton.style.backgroundColor = randomColor;
    })
    placeholder_RGB.innerText=colorButtons[Math.floor(Math.random()*colorButtons.length)].style.backgroundColor
    //display the appropriate elements and reset specific variables to its original
    outcomeElement.setAttribute("hidden","hidden")
    nextButtonElement.classList.add("hidden")
    scoreElement.setAttribute("hidden","hidden")
    numLives=3
    points=0
    livesElement.innerText="Number of lives : " + numLives
    restartButtonElement.classList.add("hidden")
}