function bruteforce(n: number) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count;
}
console.log(bruteforce(36));

function optimal(n: number) {
  let count = 0;
  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0) {
      if (n / i !== i) {
        count += 2;
      } else count++;
    }
  }
  return count;
}
console.log(optimal(36));

export {};
