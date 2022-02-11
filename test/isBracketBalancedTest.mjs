import {testDataset} from "./testDataset.mjs";
import { isBracketBalanced } from "../modules/balanced-brackets.mjs";

const isBracketBalancedTest = (testDataset) => {
    testDataset.forEach((testCase) => {
        let res = isBracketBalanced(testCase.text);
        let msg = `${testCase.text} is bracket balanced: ${res}`;
        console.log(msg);
        console.assert(res == testCase.assert,"");        
    });
}

isBracketBalancedTest(testDataset);