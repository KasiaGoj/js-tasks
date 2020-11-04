const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.second');
 
 //zmiana stylu bezpośrednio na elemencie:
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';
   
 //działanie na klasach css:   
    p1.classList.add('background_red');
    p2.classList.add('background_yellow');

//toggle - sprawdza, czy klasa jest; jezeli tak - usuwa ją, jezeli nie ma - dodaje:
    // p1.classList.toggle('background_red');

}

let btnChangeBackground = document.getElementById("change_background");

btnChangeBackground.addEventListener('click', setBackground);