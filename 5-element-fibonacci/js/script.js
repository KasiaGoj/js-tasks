const fibonacci = (num) => {
    const result = [0, 1];
  
    for (let i = 2; i <= num; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
  
      result.push(a + b);
    }
  
    return result[num];
  };
  
  console.log(fibonacci(3));
  console.log(fibonacci(5));
  console.log(fibonacci(10));