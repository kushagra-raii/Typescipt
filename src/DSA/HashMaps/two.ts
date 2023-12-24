let array = [2,8,5,6,2,7,4,2,6,5,4,2,4,6,9];

let hashMap = new Map<number,number>();

for(let i = 0; i< array.length;i++){
    if (hashMap.has(array[i])) {
        let temp = hashMap.get(array[i])!;
        hashMap.set(array[i],temp+1);

    }
    else {
        hashMap.set(array[i],1);

    }
}

for (let index = 0; index < array.length; index++) {
    if (hashMap.get(array[index]) === 1) {
        console.log(array[index]);
        break;
    }    
}




export {}