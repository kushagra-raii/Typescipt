const linearSearch = (arr: Array<number>, key: number) => {
  for (let index = 0; index < arr.length; index++) {
    if (key === arr[index]) {
      return index;
    }
  }
  return -1;
};
