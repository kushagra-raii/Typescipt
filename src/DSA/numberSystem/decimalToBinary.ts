const decimalToBinary = (decimal: number) =>{
    let z;
    let ans = 0;
    let mul = 1;
    while(decimal !== 0){
        z = decimal % 2;
        decimal = Math.floor(decimal/2);

        if(z!==0) ans += (z * mul);
        mul *= 10;

    }
    return ans;
}

console.log(decimalToBinary(170));