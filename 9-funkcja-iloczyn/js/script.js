//Napisz funkcję, która pobiera trzy parametry.
function myCalculations(num1, num2, num3) {

    /* Funkcja tworzy zmienną lokalną i do niej przypisuje iloczyn trzech pobranych parametrów.*/
      let result = num1*num2*num3;
    
    //Następnie funkcja zwraca wartość. 
      return result;
    
    }
    
    /* Zwrócona wartość funkcji jest przypisana do zmiennej globalnej, */
    
    let wynik = myCalculations(2,5,6);
    
    //a potem wartość tej zmiennej jest wyświetlana w konsoli.
    
    console.log(wynik);