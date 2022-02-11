import {testDataset} from "./testDataset.mjs";
import {isBracketBalancedWithStream} from "../modules/balanced-brackets-stream.mjs"
const isBracketBalancedWithStreamTest = (testDataset) => {
    
    testDataset.forEach((testCase) => {
        let res = isBracketBalancedWithStream(testCase.text);
        let msg = `${testCase.text} is bracket balanced: ${res}`;
        console.log(msg);
        console.assert(res == testCase.assert,"");
        
    });
}

isBracketBalancedWithStreamTest(testDataset);