const printWave = (arr: number[][], m: number, n: number) => {
  for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        console.log(arr[i][j]);
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        console.log(arr[i][j]);
      }
    }
  }
};

const arr = [
  [1, 2, 3],
  [1, 2, 3],
];

printWave(arr, 2, 3);
