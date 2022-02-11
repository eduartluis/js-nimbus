export const isBracketBalancedWithFor = (sText) => {
    // console.log(`This string Has balanced brackets? ${sText}`);
    const regExpClean = /([^\{\}])/g;
    const regExpOpen = /\{/g;
    let onlyBrackets = sText.replace(regExpClean,'');    
    let count = 1;
    if (sText == "")
        return true;
    if (onlyBrackets.length == 1) 
        return false;       
    //console.log(`Clear = ${onlyBrackets}`);
    //empty string, start with bracket, count open = count close
    //console.log(onlyBrackets.replace(regExpOpen,'').length);
    if(onlyBrackets.startsWith('{') && onlyBrackets.replace(regExpOpen,'').length * 2 == onlyBrackets.length ){
        count = 0;
        for(let idx= 0; idx < onlyBrackets.length; idx++){
            count = "{" == onlyBrackets[idx] ? count +1 : count -1;
            if(count < 0){
                break;
            }
        }
    }
    //console.log(count);
    return count == 0;
}
