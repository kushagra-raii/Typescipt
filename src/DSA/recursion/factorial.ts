export const factorial = (n: number): number => {
  if (n === 1) {
    return 1;
  }
  let temp = factorial(n - 1);
  return temp * n;
};

console.log(factorial(5));
