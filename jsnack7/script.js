const array = [];

let sum = 0;
let average = 0;

// Generate random number and push in the array
for(i = 0; i < 10; i++) {
    let randomInt = Math.floor(Math.random() * 10) + 1;
    array.push(randomInt);
}

// For sum all the number in the array
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}


// To make the average number
average = sum / array.length;

console.log(array);
console.log(`This is the sum of array numbers: ${sum}`);
console.log(`This is the average of array numbers: ${average}`);