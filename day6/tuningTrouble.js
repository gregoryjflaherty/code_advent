import fs from 'fs';

let sequence = fs.readFileSync('startOfPacket.txt', { encoding: 'utf8', flag: 'r' });

const getMarker = (distinctNo) => {
    for (let i = 0; i < sequence.length; i++) { 
        let pointer1 = i 
        let pointer2 = i + distinctNo 
        
        let chunk = sequence.slice(pointer1, pointer2)
        let uniqueChunk = [...new Set(chunk)].join('')

        if (chunk === uniqueChunk) { 
            return pointer2
        }
    }
}

const answer1 = getMarker(4)
console.log(`Part 1 Answer: ${answer1}`) 

const answer2 = getMarker(14)
console.log(`Part 2 Answer: ${answer2}`) 