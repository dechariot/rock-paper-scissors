// Definition
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const action_mess = document.getElementById("action-mess")

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function getCompChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
    }
    
    console.log("User choice is ", userChoice)
    console.log("Comp choice is ", compChoice)
};

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = `${userScore}`;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You Win!`
};

function lose(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = `${compScore}`;
    result_div.innerHTML = `${convertToWord(userChoice)} can't beats ${convertToWord(compChoice)}. You Lose!`
}

function draw(userChoice, compChoice) {
    userChoice;
    compChoice;
    result_div.innerHTML = `Draw`
};


function main() {

    rock_div.addEventListener("click", function () {
        game("r");
    });
    paper_div.addEventListener("click", function () {
        game("p");
    });
    scissors_div.addEventListener("click", function () {
        game("s");
    });

    game();


};

main();

