let num = [];

for (let index = 0; index < 6; index++) {
    let inser = parseInt(prompt("Inserisci un numero"));
    
    if (!(inser%2 == 0) && !(isNaN(inser))) {
        num.push(inser);
    }
}
console.log(num);