'use strict'



let RPSpScore = 0;
let RPScScore = 0;
let RPSroundCounter = 0;


//-------------------------Start Auswahl Animation--------------------------------------------

function animateElementUser(item) {
    item.classList.add('userAnimation')
    setTimeout(() => {
        item.classList.remove('userAnimation');
    }, 1000);
}
function animateElementComp(item) {
    item.classList.add('compAnimation')
    setTimeout(() => {
        item.classList.remove('compAnimation');
    }, 1000);
}

//-------------------------Ende Auswahl Animation--------------------------------------------

//--------Start Spieler Auswahl & Computer Random Generation & SpielStart---------------

function userEvent(userClick) {

    let userChoice = 0;
    if (userClick == "rock") {
        userChoice = 0;
    }
    else if (userClick == "paper") {
        userChoice = 1;
    }
    else if (userClick == "scissors") {
        userChoice = 2;

    }

    let compChoice = compRan();
    function compRan() {
        const ranPicker = Math.floor(Math.random() * 3);

        if (ranPicker == 0) {
            return 0;
        }

        else if (ranPicker == 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (RPSpScore < 3 && RPScScore < 3) {
        wintest.style.opacity = 0;
        loosetest.style.opacity = 0;
        playRound(userChoice, compChoice);
    }
}

//--------Ende Spieler Auswahl & Computer Random Generation & SpielStart---------------

//-----------Start Spielrunde + Resultatcheck------------------------------

function playRound(userChoice, compChoice) {
    let resultUser = document.getElementById("resultUser")
    let resultComp = document.getElementById("resultComp")
    let pScoreElement = document.getElementById("RPSpScore");
    let cScoreElement = document.getElementById("RPScScore");
    let roundCounterElement = document.getElementById("RPSroundCounter");
    let resultUserRock = document.getElementById("resultUserRock");
    let resultCompRock = document.getElementById("resultCompRock");
    let resultUserPaper = document.getElementById("resultUserPaper");
    let resultCompPaper = document.getElementById("resultCompPaper");
    let resultUserScissors = document.getElementById("resultUserScissors");
    let resultCompScissors = document.getElementById("resultCompScissors");
    resultUserRock.style.opacity = 0;
    resultCompRock.style.opacity = 0;
    resultUserPaper.style.opacity = 0;
    resultCompPaper.style.opacity = 0;
    resultUserScissors.style.opacity = 0;
    resultCompScissors.style.opacity = 0;

    if (userChoice == 0) {
        resultUserRock.style.opacity = 1;
        animateElementUser(resultUser);
        if (compChoice == 0) {
            RPSroundCounter += 1;
        }
        else if (compChoice == 1) {
            RPScScore += 1;
            RPSroundCounter += 1;
        }
        else if (compChoice == 2) {
            RPSpScore += 1;
            RPSroundCounter += 1;
        }
    }
    else if (userChoice == 1) {
        resultUserPaper.style.opacity = 1;
        animateElementUser(resultUser);
        if (compChoice == 0) {
            RPSpScore += 1;
            RPSroundCounter += 1;
        }
        else if (compChoice == 1) {
            RPSroundCounter += 1;
        }
        else if (compChoice == 2) {
            RPScScore += 1;
            RPSroundCounter += 1;
        }
    }
    else {
        resultUserScissors.style.opacity = 1;
        animateElementUser(resultUser);
        if (compChoice == 0) {
            RPScScore += 1;
            RPSroundCounter += 1;
        }
        else if (compChoice == 1) {
            RPSpScore += 1;
            RPSroundCounter += 1;

        }
        else if (compChoice == 2) {
            RPSroundCounter += 1;
        }
    }
    if (compChoice == 0) {
        resultCompRock.style.opacity = 1;
        animateElementComp(resultComp)
    }
    if (compChoice == 1) {
        resultCompPaper.style.opacity = 1;
        animateElementComp(resultComp)
    }
    if (compChoice == 2) {
        resultCompScissors.style.opacity = 1;
        animateElementComp(resultComp)
    }

    if (RPSpScore == 3 || RPScScore == 3) {
        setTimeout(() => {
            hardReset();
        }, 1500)

    }
    pScoreElement.textContent = String(RPSpScore);
    cScoreElement.textContent = String(RPScScore);
    roundCounterElement.textContent = String("Round: " + RPSroundCounter);

}

//-----------Ende Spielrunde + Resultatcheck------------------------------

//-----------Start Gewinner/Verlierer Reset---------------------------------

function hardReset() {
    let pScoreElement = document.getElementById("RPSpScore");
    let cScoreElement = document.getElementById("RPScScore");
    let roundCounterElement = document.getElementById("RPSroundCounter");
    let wintest = document.getElementById("wintest");
    let loosetest = document.getElementById("loosetest");

    if (RPSpScore == 3) {
        wintest.style.opacity = 1;
    }
    else if (RPScScore == 3) {
        loosetest.style.opacity = 1;
    }

    setTimeout(() => {
        pScoreElement.textContent = '0';
        cScoreElement.textContent = '0';
        roundCounterElement.textContent = 'Round: 0'
        RPSpScore = 0;
        RPScScore = 0;
        RPSroundCounter = 0;
        wintest.style.opacity = 0;
        loosetest.style.opacity = 0;
    }, 2500)
    resultUserRock.style.opacity = 0;
    resultCompRock.style.opacity = 0;
    resultUserPaper.style.opacity = 0;
    resultCompPaper.style.opacity = 0;
    resultUserScissors.style.opacity = 0;
    resultCompScissors.style.opacity = 0;
}

//-----------Ende Gewinner/Verlierer Reset---------------------------------

//-----------Start Reset Button Function---------------------------------

function hardResetBtn() {
    let pScoreElement = document.getElementById("RPSpScore");
    let cScoreElement = document.getElementById("RPScScore");
    let roundCounterElement = document.getElementById("RPSroundCounter");
    let resultUserRock = document.getElementById("resultUserRock");
    let resultCompRock = document.getElementById("resultCompRock");
    let resultUserPaper = document.getElementById("resultUserPaper");
    let resultCompPaper = document.getElementById("resultCompPaper");
    let resultUserScissors = document.getElementById("resultUserScissors");
    let resultCompScissors = document.getElementById("resultCompScissors");

    setTimeout(() => {
        pScoreElement.textContent = '0';
        cScoreElement.textContent = '0';
        roundCounterElement.textContent = 'Round: 0'
        RPSpScore = 0;
        RPScScore = 0;
        RPSroundCounter = 0;
        resultUserRock.style.opacity = 0;
        resultCompRock.style.opacity = 0;
        resultUserPaper.style.opacity = 0;
        resultCompPaper.style.opacity = 0;
        resultUserScissors.style.opacity = 0;
        resultCompScissors.style.opacity = 0;
    }, 100)

}

//-----------Ende Reset Button Function---------------------------------