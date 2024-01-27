//First interactive game
let playGame = confirm("Shall we play rock, paper, or scissors? ");

if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.")
    if (playerChoice) {
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === "rock" || playerChoice==="paper"|| playerChoice=="scissors") {
            let computerChoice = Math.floor(Math.random() * 3+1);
            let computer = computerChoice === 1? "rock"
            :computerChoice === 2? "paper"
            :"scissors";
            let result =
            playerChoice ===computer 
            ?"Tie game!"
            :playerChoice === "rock" && computer === "paper"
            ?`player : ${playerChoice}\nComputer: ${computer}\nComputer wins!`
            :playerChoice === "paper" && computer === "scissors"
            ?`player : ${playerChoice}\nComputer: ${computer}\nComputer wins!`
            :playerChoice === "scissors" && computer === "rock"
            ?`player : ${playerChoice}\nComputer: ${computer}\nComputer wins!`
            :`player : ${playerChoice}\nComputer: ${computer}\nPlayer wins!`;
            alert(result)
            let playAgain=confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } 
        else{
            alert("You didn't enter rock,paper, or scissors.")
        }
    }
    else{
    alert("I guessyou changed your mind. Maybe next time.");
    }
}
else{
    alert("Ok, maybe next time.");
} 