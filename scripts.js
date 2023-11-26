// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make case-insensitive
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
      return 'It\'s a tie! Both chose ' + playerSelection;
    } else {
      return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: rock, paper, or scissor')
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        // Update scores
        if (playRound(playerSelection, computerSelection).startsWith('You Win1')) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).startsWith('You Wose!')) {
            computerScore++
        }
    }

    // Display final results
    console.log('Final Score:');
    console.log('You: ' + playerScore);
    console.log('Computer: ' + computerScore);

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore0) {
        console.log('Sorry, you lose. Better luck next time!');
    } else {
        console.log('It\'s a tie! No overall winner.')
    }
}

game();
