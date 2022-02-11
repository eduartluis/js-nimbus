/**
 * @param {string} sText The string
 */
const isBracketBalancedRecursive = async (sText) => {
    
    const regExp = /([^\{\}])*(\{([^\{\}])*(\{([^\{\}])*\})*([^\{\}])*\})*([^\{\}])*/g;
    let tmp = sText.toString().replace(regExp, '');
    //console.log(`removing ... ${tmp}`);
    if(tmp == "")
      return true;
    if(sText == tmp || sText.length == 1)
     return false;
    return isBracketBalancedRecursive(tmp);
}
export {isBracketBalancedRecursive};

