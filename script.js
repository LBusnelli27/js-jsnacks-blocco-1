let num = [];
let sum;


for (let index = 0; index < 10; index++) {
    let inser = parseInt(prompt("Inserisci un numero"));
    num.push(inser);
}
console.log(num);

sum = num.reduce(function(a, b){
    return a + b;
}, 0);

console.log(`La somma: ${sum}`);