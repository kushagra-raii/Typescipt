const binarySearch = (arr: Array<number>, key: number) => {
  let s = 0;
  let e = arr.length;
  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    if (arr[m] === key) {
      return m;
    } else if (arr[m] < key) {
      s = m + 1;
    } else {
      e = m - 1;
    }
  }
  return -1;
};
