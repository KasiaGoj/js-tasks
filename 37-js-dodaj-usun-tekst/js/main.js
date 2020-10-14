/* 1. Button #dodaj - po jego kliknięciu w paragrafie powinien pojawić się przykładowy tekst.
2. Button #usun - po kliknięciu tekst w paragrafie ma znikać --> */

let x = document.getElementById("tekst");

/* inny sposób na tą samą zmienną: let x = document.querySelector("#tekst") */

let addButton = document.querySelector("#dodaj");

addButton.onclick = function () {
    x.textContent = 'przykładowy tekst';
}

let removeButton = document.querySelector("#usun") 

removeButton.onclick = function () {
    x.textContent = '';
}