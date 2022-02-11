
const isBracketBalancedWithWhile = (sText) => {
    console.log(`This string Has balanced brackets? ${sText}`);
    let regExpClean = new RegExp('\{','g');
    let regExpRemoveBrackets = new RegExp('(\{(\{\})*\})*', 'g');
    let onlyBrackets = sText.replace(regExpClean,'');    
    let tmp = "";
    let res = false;
    let next = true;
    if (sText == "")
        return true;
           
    //console.log(`Clear = ${onlyBrackets}`);
    //empty string, start with bracket, count open = count close
    if(onlyBrackets.startsWith('{') && onlyBrackets.replace(regExp,'').length * 2 == onlyBrackets.length ){
        do{
            tmp = onlyBrackets.replace(regExpRemoveBrackets, '');
            if(tmp != ""){
                next = tmp == onlyBrackets;
                onlyBrackets = tmp;
            }else{
                res = true;
                next = false;
            }
        }while(next);
    }
    
    return res;
}