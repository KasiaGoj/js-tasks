/* Zaimplementuj funkcję, która sortuje tablicę przez bąbelkowanie.
Funkcja przyjmuje parametr - tj. tablicę do posortowania, a zwraca posortowaną tablicę.
Wywołaj funkcję z tablicą [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1].
Wynik jej działania wyświetl w konsoli. 

Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności, jeżeli zaburza ona porządek,
w jakim się sortuje tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia nie dokonano żadnej zmiany.*/

function bubbleSort(tablica) {
	for (let i = 0; i<tablica.length; i++) {               // petla glowna (ilosc przebiegow = ilosci par w tablicy 
		 for(let j = 0; j<tablica.length -1; j++) {        // petla sortujaca 
			 if (tablica[j] > tablica[j+1]) {              // sprawdzenie czy liczba lewej jest wieksza do prawej
				 let wymiana = tablica[j+1];               // zamiana liczb 
				 tablica[j+1] = tablica[j];
				 tablica[j] = wymiana;
			 }
		 }
	}
  //funkcja zwraca posortowaną tablicę
	return tablica;
}

//wywołanie funkcji
console.log(bubbleSort([12, 67, 34, 23.01, 24, 125, 45, 67, 98, 1]));
console.log(bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));

 // petla sortujaca po kazdym przebiegu o jeden mniejsza bo najwyzsza liczba laduje na koncu.
