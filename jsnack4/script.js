const guestList = ["luca" , "giulia" , "francesco" , "alberto" , "simona" , "claudio" , "gianluca" , "alassandra" , "riccardo" , "federico" ];

console.log("Questa e' la lista degli invitati:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}


let nameInvite = prompt("Scrivi il tuo nome")

let checkValue = false;

for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] == nameInvite.toLowerCase().trim()) {
        checkValue = true;
    }
}

if (checkValue == true) {
    console.log(`Benvenuto/a ${nameInvite}, sei nella lista puoi entrare!`);
} else {
    console.log(`Mi dispiace ${nameInvite}, non sei nella lista non posso farti entrare!`);
}
