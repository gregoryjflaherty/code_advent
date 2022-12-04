import fs from 'fs';

const items = fs.readFileSync('items.txt',{ encoding: 'utf8', flag: 'r' });

// =======FORMAT FILE===============
let rucksacks = []
let currentItem = []
for (let i = 0; i < items.length; i++) { 
    if (items[i] === '\n' || i === items.length - 1) {
        rucksacks.push(currentItem.join(''))
        currentItem = []
    } else {
        currentItem.push(items[i])
    }
}
// =======FORMAT FILE===============

// split the rucksackin half
// see if any item appears in both
const getDuplicate = (rucksack) => {
    let splitAt = (Math.floor(rucksack.length / 2))
    let first = rucksack.substring(0, splitAt)
    let second = rucksack.substring(splitAt, (rucksack.length))
    for (let i = 0; i < first.length; i++) { 
        if (second.includes(first[i])) {
            return first[i]
        }
    }
}

const getPriority = (letter) => {
    let priority = 0
    if (letter.toUpperCase() === letter) {
        priority = letter.charCodeAt() - 38
    } else {
        priority = letter.charCodeAt() - 96
    }
    return priority
}


let priorityTotal = 0
const sortThrough = () => {
    for (let i = 0; i < rucksacks.length; i++) { 
        let letter = getDuplicate(rucksacks[i])
        let priority = getPriority(letter)
        priorityTotal += priority
    }
    return priorityTotal
}


const finalAnswer = sortThrough()


// Part 1 answer
console.log(`Part 1 Answer: ${finalAnswer}`) 

// Part 2
let rucksackGroups = []
let badges = []
const getBadges = () => {
    for (let i = 0; i < rucksacks.length; i++) { 
        if ((i * 3) > rucksacks.length || (i * 3) + 3 > rucksacks.length) {
                return badges
        }
        rucksackGroups.push(rucksacks.slice((i * 3), (i * 3) + 3))
        rucksackGroups = rucksackGroups.flat()      
        for (let i = 0; i < rucksackGroups[0].length; i++) { 
            if (rucksackGroups[1].includes(rucksackGroups[0][i]) && rucksackGroups[2].includes(rucksackGroups[0][i])) {
                badges.push(rucksackGroups[0][i])
                break
            }
        }
        rucksackGroups = []
    }
}

const badgeList = getBadges()

console.log("Laura rocks")

let totalPriority2 = 0
const sumPriorities = () => {
    for (let i = 0; i < badgeList.length; i++) { 
        totalPriority2 += getPriority(badgeList[i])
        
    }
    return totalPriority2
}

console.log(`Part 2 Answer: ${sumPriorities()}`) 