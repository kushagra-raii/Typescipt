// given n array elements & q queries for every query find frequency of element in array


let array = [2,5,6,2,4,2,6,5,4,2,4,6];
let query = [2,4,6];

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

for (let i = 0; i < query.length; i++) {
    if(hashMap.has(query[i])){
        console.log(hashMap.get(query[i]));
    }
    else{
        console.log(0);
        
    }
}