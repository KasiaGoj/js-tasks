for ( i = 5; i >=0; i --) {
    console.log("kolejne działanie")
}
// powtarza działanie dla 5, dla 4, dla 3, dla 2, dla 1 i dla 0. w sumie 6 razy


function reverseString(word) { 
    // nowe zmienne dla funkcji:
    var revArray = []; 
    // zmienna length = długość wyrazu - 1
    var length = word.length - 1; 
      
    // zwraca wartość dla kolejnego znaku naszego "wyrazu", powtarzając to tyle razy, ile liczy zmienna length
    // push dokłada nowe 'wartości' do pozostałej po powtórzeniu length-1 literki, np. dla wyrazu kasia, length-1 będzie 4, czyli for powtórzy sprawdzanie moich wartości 4 razy
     
    for(let i = length; i >= 0; i--) { 
        revArray.push(word[i]); 
    } 
      
    // "join" połącz nowe elementy 
    return revArray.join(''); 
} 
  
console.log(reverseString("kasia"));

console.log(reverseString("Akademia108"));


function reversedWords(word) {
    return (word.split("").reverse().join(""));
    }
    
    console.log(reversedWords("przedmiot"));
    
    console.log(reversedWords("kot"));
