const arrayNumbers = [];

let sum = 0;
let average = 0;

// Generate random number and push in the array + do the sum
for(let i = 0; i < 10; i++) {
    let randomInt = Math.floor(Math.random() * 10) + 1;
    arrayNumbers.push(randomInt);
    sum += arrayNumbers[i];
}


// To make the average number
average = sum / arrayNumbers.length;

console.log(arrayNumbers);
console.log(`This is the sum of array numbers: ${sum}`);
console.log(`This is the average of array numbers: ${average}`);