function GetIndex(nums, target){
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let pair = []
        const temp = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if(i < j && (temp + nums[j]) == target){
                pair.push(i);
                pair.push(j);
            }
        }    
        if(pair.length != 0)
            result.push(pair)    
    }
    return result;
}

nums = [2,7,11,12,-3];
target = 9;
console.log(GetIndex(nums, target))