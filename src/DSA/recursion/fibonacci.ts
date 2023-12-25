export const fibo = (n: number): number => {
    console.log("Call for n: ",n);
    
  if (n === 1 || n === 0) return n;
  return fibo(n - 1) + fibo(n - 2);
};


console.log(fibo(4));


