import input from './input.json' assert { type: "json" };

let current = []
const countOfCharsToCheck = 14//4

for(const { index, value } of input.signal.split("").map((value, index) => ({ index, value }))){
    if(current.length > (countOfCharsToCheck - 1)){
        if(!hasDuplicates(current)){
            console.log(index);
            console.log(current);
            break;
        }
        current = current.slice(1)
    }
    current.push(value);    
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}