function sortString(str) {
    //split dzieli stringa na poszczególne elementy (litery) i robi z niego arraya czyli tablicę, sort sortuje, a join łączy z powrotem w stringa
    return (str.split("").sort().join(""));
 //   return str.split("").sort();
    }
    
    console.log(sortString("kas"));
    
    console.log(sortString("Akademia108 jablko"));
  