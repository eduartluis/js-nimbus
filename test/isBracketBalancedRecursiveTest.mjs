import {testDataset} from "./testDataset.mjs";
import { isBracketBalancedRecursive } from "../modules/balanced-brackets-promise.mjs";

const isBracketBalancedTest = (testDataset) => {
    testDataset.forEach((testCase) => {
        isBracketBalancedRecursive(testCase.text).then((res) => {
        let msg = `${testCase.text} is bracket balanced: ${res}`;
        console.log(msg);
        console.assert(res == testCase.assert,"");
        });
    });
}

isBracketBalancedTest(testDataset);