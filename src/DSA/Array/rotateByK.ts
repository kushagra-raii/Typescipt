import { reverseArr } from "./reverse";

function rotateByK(array:Array<number>,k: number) {
    k = k % array.length;
    reverseArr(array);
    reverseArr(array,0,k-1);
    reverseArr(array,k,array.length-1);
    return array;
}
let array = [1,2,3,4,5,6,7]
console.log(array);
console.log(rotateByK(array,5));
