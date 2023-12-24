const binaryToDecimal = (binary: number) =>{
    let z;
    let ans = 0;
    let mul = 1;
    while(binary !== 0){
        z = binary % 10;
        binary = Math.floor(binary/10);

        if(z === 1) ans += (z * mul);
        mul *= 2;

    }
    return ans;
}

console.log(binaryToDecimal(10101010));