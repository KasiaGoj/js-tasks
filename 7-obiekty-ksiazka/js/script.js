/* Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) 
oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru 
"Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana,
a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki. */

class Ksiazka {
    constructor(tytul, autor, przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        if (this.przeczytana == true) {
            return 'Książka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana'
        } else {
            return ('Książka ma tytul ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana')
        }
    }
}


let pozycjaKsiazkowa = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", false);
let pozycjaKsiazkowa2 = new Ksiazka("Harry Potter", "J.K. Rowling", true);
let pozycjaKsiazkowa3 = new Ksiazka("Mały Ksiązę", "Antoine de Saint-Exupéry", true);

// sprawdzenie, jak wyświetla się jedna z ksiązek
console.log(pozycjaKsiazkowa3);

let biblioteczka = new Array (pozycjaKsiazkowa, pozycjaKsiazkowa2, pozycjaKsiazkowa3);


// let ksiazki = [pozycjaKsiazkowa, pozycjaKsiazkowa2, pozycjaKsiazkowa3];

//Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje 
//tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek,
//ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania,
//czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(),
//a wynik jej działania wyświetlaj w konsoli.




function iloscPrzeczytanych(tablica) {
    let suma = 0;
    for (let i=0; i<tablica.length; i++) {
        if (tablica[i].przeczytana == true) { 
            suma = suma + 1;   
        }  
        console.log(tablica[i].opiszKsiazke());
    }
    console.log('Ilość przeczytanych książek: ' + suma);
    return suma;
}   

console.log(iloscPrzeczytanych(biblioteczka));


