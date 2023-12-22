export const reverseArr = (arr: Array<number>, start = 0, end = arr.length-1) => {
    // let start = 0;
    // let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

let arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr);
reverseArr(arr,3,7);
console.log(arr);



let arrOdd = [10, 20, 30];
let arrEven = [10, 20, 30, 40];

console.log(arrOdd, arrEven);

reverseArr(arrOdd);
reverseArr(arrEven);

console.log(arrOdd, arrEven);
