function GetMinElement(array){
    
    const patternWord = /[А-Яа-яA-Za-z]{2,}/g;

    if(array.length == 0){
        return "";
    }
    if(array.length == 1){
        return array[0];
    }
    arr = array.join(" ");
    let minElement = arr.match(patternWord);
    
    if(minElement == null)
        return null;
    if(minElement.length >= 2)
        minElement.sort();
    return minElement[0];
}

function GetPrefix(array){
    if(array.length == 0){
        return "";
    }

    const minWord = GetMinElement(array);
    if(minWord == null){
        return "";
    }
    const result = [];
    for (let i = 0; i < minWord.length-1; i++) {
        const pattern = minWord.substring(i, minWord.length);
        // console.log(pattern);
        // console.log('------------\n');
        let flag = true;
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(element.includes(pattern) == false){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(pattern);
            break;
        }
        
    }
    
    for (let i = minWord.length; i > 1; i--) {
        const pattern = minWord.substring(0, i);
        
        let flag = true;
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(element.includes(pattern) == false){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(pattern);
            break;
        }
    }
    
    if(result.length == 2){
        if(result[0].length >= result[1].length){
            return result[0];
        }
        return result[1];

    }
        
    return result.length == 1 ? result[0]: "";
}

const patternWord = /[А-Яа-яA-Za-z]+/g;

test1 = ["цветок","поток","хлопок"];
test2 = ["потцветок","поток","потхлопок"];
test3 = ["f","п","х"];

console.log('Test 1');
console.log(GetPrefix(test1));
console.log('------------');
console.log('Test 2');
console.log(GetPrefix(test2));
console.log('------------');
console.log('Test 3');
console.log(GetPrefix(test3));