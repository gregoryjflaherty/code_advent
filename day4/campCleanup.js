import fs from 'fs';

const assignments = fs.readFileSync('assignments.txt',{ encoding: 'utf8', flag: 'r' });
const assignmentPairs = assignments.split('\n')


const containedCount = (start1, end1, start2, end2) => {
    if (start1 >= start2 && end1 <= end2) {
        return 1
    } else if (start2 >= start1 && end2 <= end1) {
        return 1
    } else {
        return 0
    }
}

const parseAssignments = (func) => {
    let total = 0
    for (let i = 0; i < assignmentPairs.length; i++) { 
        let splitPair = assignmentPairs[i].split(',')
        let start1 = parseInt(splitPair[0].split('-')[0])
        let end1 = parseInt(splitPair[0].split('-')[1])
        let start2 = parseInt(splitPair[1].split('-')[0])
        let end2 = parseInt(splitPair[1].split('-')[1])
    
        total += func(start1, end1, start2, end2)
    }
    return total
}
// Part 1 answer
const answer1 = parseAssignments(containedCount)
console.log(`Part 1 Answer: ${answer1}`) 

// Part 2
const touchingCount = (start1, end1, start2, end2) => {
    if (end1 >= start2 && start1 <= end2) {
        return 1
    } else {
        return 0
    }
}

// Part 2 answer
const answer2 = parseAssignments(touchingCount)
console.log(`Part 2 Answer: ${answer2}`) 