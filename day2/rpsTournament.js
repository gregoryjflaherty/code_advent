import fs from 'fs';


const strategy = fs.readFileSync('strategyGuide.txt',
            {encoding:'utf8', flag:'r'});

const key = {
    A: { beats: 'Z', equiv: 'X' , loses: 'Y' }, 
    B: { beats: 'X', equiv: 'Y' , loses: 'Z'},
    C: { beats: 'Y', equiv: 'Z' , loses: 'X'}
}

const moveScore = {
    X: 1,
    Y: 2, 
    Z: 3
}

const whoWon = (opponentMove, myMove) => {
    if (key[opponentMove].beats === myMove) {
        return 0
    } else if (key[opponentMove].equiv == myMove) {
        return 3
    } else {
        return 6
    }
}


const playTournament = (func, key) => {
    let opponentMove = null;
    let myMove = null;
    let totalScore = 0
    for (let i = 0; i < strategy.length; i++) {
        // odd idx numbers are ' ' && \n 
        if (i % 2 === 0) {
            if (opponentMove) {
                myMove = strategy[i];
                totalScore += (func(opponentMove, myMove) + key[myMove])
                myMove = null;
                opponentMove = null;
            } else {
                opponentMove = strategy[i];
            }
        }
    }
    return totalScore 
}



    // Part 1 Answer
const finalAnswer = playTournament(whoWon, moveScore)
console.log(`Part 1 Answer: ${finalAnswer}`) 

// PART 2
const moveResults = {
    X: 0,
    Y: 3, 
    Z: 6
}

const myChoice = (opponentMove, myResult) => {
    let myMove = null
    if (myResult === 'X') {
        myMove = key[opponentMove].beats
    } else if (myResult === 'Y') {
        myMove = key[opponentMove].equiv
    } else {
        myMove = key[opponentMove].loses
    }
    return moveScore[myMove]
}

    // Part 2 Answer
const finalAnswer2 = playTournament(myChoice, moveResults)
console.log(`Part 2 Answer: ${finalAnswer2}`) 