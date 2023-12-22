function isPrime(n: number): boolean {
    let count = 0;
    for (let i = 0; i * i <= n; i++) {
      if (n % i === 0) {
        if (n/i !== i) {
          count += 2;
        } else count++;
      }
    }
    return  count === 2 ? true : false;
  }
  console.log(isPrime(13));