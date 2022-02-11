import {testDataset} from "./testDataset.mjs";
import {isBracketBalancedWithFor} from "../modules/balanced-brackets-for.mjs";
console.log(testDataset);
const isBracketBalancedWithForTest = (testDataset) => {
    
    testDataset.forEach((testCase) => {
        let res = isBracketBalancedWithFor(testCase.text);
        let msg = `${testCase.text} is bracket balanced: ${res}`;
        console.log(msg);
        console.assert(res == testCase.assert,"");       
        
    });
}

//isBracketBalancedWithForTest([{text:"{}{",assert:true}]);
isBracketBalancedWithForTest(testDataset);