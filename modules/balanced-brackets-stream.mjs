
const isBracketBalancedWithStream = (sText) => {
    console.log(`This string Has balanced brackets? ${sText}`);
    let regExpClean = new RegExp('\{','g');   
    let count = 0;
    if (sText == "")
        return true;
    
    Array.from(sText.replace(regExpClean,'')).forEach(element => {
        count = '{' == element ? count +1 : count - 1;
    });
    console.log(count);
    return count == 0
}


export{isBracketBalancedWithStream}
