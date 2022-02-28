let firstNum = parseInt(prompt("Scirvi il primo numero"));
let secondNum = parseInt(prompt("Scirvi il secondo numero"));

console.log(`Primo numero: ${firstNum}`);
console.log(`Secondo numero: ${secondNum}`);

if(isNaN(firstNum) || isNaN(secondNum)) {
    console.log("Uno dei due o tutti e due non sono numeri");
} else if(firstNum > secondNum) {
    console.log("Il primo e' piu' grande");
} else if (firstNum == secondNum) {
    console.log("I numeri sono uguali");
} else {
    console.log("Il secondo e' il piu' grande");
}