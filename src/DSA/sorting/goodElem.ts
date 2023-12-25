function goodElement(nums:number[]){
    let count = 0;
    if(nums[0] === 0) count++;

    let firstOccurenceIndex = 0;
    for(let i = 1;i<nums.length;i++){
        if (nums[i] !== nums[i-1]) {
            if (nums[i]===i) {
                count++
                firstOccurenceIndex = i;
                console.log(i);
                
            }
        }
        else{
            if(nums[i]===firstOccurenceIndex) {count ++;
            console.log(i);
            }
        }
    }
    console.log(count);
}

goodElement([0,-2,3,3,5,5,5,5,8,8,8,10,17]);