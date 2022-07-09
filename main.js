// Get player text field
const playerText = document.querySelector("#playerText");
// Get computer text field
const computerText = document.querySelector("#computerText");
// Get result text field
const resultText = document.querySelector("#resultText");
// Get all buttons
const choiceBtns = document.querySelectorAll(".choiceBtn")


let player;
let computer;
let result;

//Get each buttons and add event listeners
choiceBtns.forEach(button => button.addEventListener("click", ()=>{
    player = button.textContent;
    computerTurn();
    playerText.textContent = 'player: ${player}' 
    computerText.textContent = 'computer: ${computer}' 
    resultText.textContent = checkWinner()
}))

// computer logic here
function computerTurn(){
    const randomNumber = Math.floor(Math.random() * 3) +1;

    switch (randomNumber) {
        case 1:
            computer = "Rock"
            break;
    
        case 2:
            computer = "Papper"
            break;

        case 3:
            computer = "Scissors"
            break;    

        default:
            break;
    }
}

//check winner logic

function checkWinner(){
    if(player == computer){
        return "Draw!"
    }else if(computer == "Rock"){
        result(player == "Paper") ? "You Win" : "You Loose"
    }else if(computer == "Paper"){
        return(player =="Scissors") ? "You Win" : "You loose"
    }else if(computer == "Scissors"){
        return(player == "Rock") ? "You Win " : "You Loose "
    }
}
