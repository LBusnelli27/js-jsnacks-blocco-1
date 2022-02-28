let firstWord = document.getElementById('first-input');
let secondWord = document.getElementById('second-input');

let sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener('click', function() {

    if (firstWord.value.length === secondWord.value.length) {
        console.log("Le parole hanno la stessa lunghezza");
        console.log(firstWord.value);
        console.log(secondWord.value);
    } else if (firstWord.value.length > secondWord.value.length) {
        console.log("Di seguito le parole in ordine decrescente di caratteri");
        console.log(firstWord.value);
        console.log(secondWord.value);
    } else {
        console.log("Di seguito le parole in ordine decrescente di caratteri");
        console.log(secondWord.value);
        console.log(firstWord.value);
    }

    firstWord.value = "";
    secondWord.value = "";
});


