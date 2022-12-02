import fs from 'fs';


const calorieData = fs.readFileSync('calorieData.txt',
            {encoding:'utf8', flag:'r'});
 


const joinedNums = []
let num = []
for (let i = 0; i <= calorieData.length; i++) {
    if (calorieData[i] !== '\n') {
        num.push(calorieData[i])
    } else {
        joinedNums.push(parseInt(num.join('')))
        num = []
    }
}

let elfTotals = []
let total = 0
for (let i = 0; i <= joinedNums.length; i++) {
    if (!isNaN(joinedNums[i])) {
        total += joinedNums[i]
    } else {
        elfTotals.push(total)
        total = 0
    }
}

let getMax = (array) => {
    return Math.max(...array)
}

let totalTop3 = (array) => {
    let total = 0
    for (let i = 0; i <= 2; i++) {
        let currentMax = getMax(array)
        total += currentMax
        let idx = array.indexOf(currentMax)
        array.splice(idx, 1)
    }
    return total
}

console.log(totalTop3(elfTotals))

