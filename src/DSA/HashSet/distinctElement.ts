let array = [2, 8, 5, 6, 2, 4, 2, 6, 5, 4, 2, 4, 6, 9];


let hashSet = new Set<number>();


for (let i = 0; i < array.length; i++) {
    hashSet.add(array[i]);
}

console.log(hashSet.size);



export {}