const isEven = (num: number):boolean =>{
    
    if (num&1) {
        return false;
    }
    return true;
}

console.log(isEven(15));
console.log(isEven(16));

