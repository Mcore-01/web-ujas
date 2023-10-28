function spinWords(text){
    let result = '';
    const arrayWord = text.split(' ');
    for(let i = 0; i < arrayWord.length; i++){
        const temp = arrayWord[i];
        if(temp.length > 4)
            result+= reverse(temp);
        else
            result+= temp;
        result+=" "
    }
    console.log(result);
}
function reverse(text){
    let result = "";
    for(let i = text.length-1; i > -1; i--){
        result+=text[i];
    }
    return result;
}

spinWords("Привет от Legacy");
spinWords("This is a test");