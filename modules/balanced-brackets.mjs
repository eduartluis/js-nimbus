
/**
 * @param {string} sText The string
 */
const isBracketBalanced = (sText) => {
    const regExpOpenBracket = new RegExp('\{','g');
    const regExpClean = /([^\{\}])*/g;
    const regExpRemoveBrackets = /(\{(\{\})*\})*/g;
    let onlyBrackets = sText.replace(regExpClean,'');
    let temp = "";
    if (sText == "")
        return true;   
        
    if(onlyBrackets.startsWith('{') 
    && onlyBrackets.endsWith('}') 
    && onlyBrackets.replace(regExpOpenBracket,'').length * 2 == onlyBrackets.length ){
        for(let idx = 0; idx < onlyBrackets.length; idx ++){
            temp = onlyBrackets.replace(regExpRemoveBrackets, '');
            if(temp == "") return true;
            if(temp == onlyBrackets) return false;
            onlyBrackets = temp;
        }
    }    
    return false;
    
}

export {isBracketBalanced};

