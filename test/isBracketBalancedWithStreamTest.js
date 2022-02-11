
const isBracketBalancedWithStreamTest = () => {
    const testDataset = [
        {text:"",assert:true},
         {text:"{}",assert:true},
         {text:"{{}}",assert:true},
         {text:"{}{}{}",assert:true},
         {text:"{{{}}}",assert:true},
         {text:"{{}{}}",assert:true},
         {text:"{{}{{}}}",assert:true},
         {text:"{{{}}}{}",assert:true},
         {text:"{{}{{}{}}}",assert:true},
         {text:"{{{}{}}{}}",assert:true},    
         {text:"{abc...xyz}",assert:true},
         {text:"abc...xyz{abc...xyz}",assert:true},
         {text:"{abc...xyz}abc...xyz",assert:true},
         {text:"abc...xyz{abc...xyz}abc...xyz",assert:true},
         {text:"abc...xyz{abc...xyz}abc...xyz{abc...xyz}abc...xyz",assert:true},
         {text:"abc...xyz{abc...xyz}abc...xyz",assert:true},
         {text:"abc...xyz{abc...xyz}abc...xyz",assert:true},
         {text:"abc...xyz{abc...xyz}abc...xyz",assert:true},
         {text:"}{",assert:false},
         {text:"{}{",assert:false},
         {text:"}{}",assert:false},
         {text:"{{}}}",assert:false},
         {text:"{{}}{{}}}",assert:false},
    ];
    testDataset.forEach((testCase) => {
        res = isBracketBalancedWithStream(testCase.text);
        let msg = `${testCase.text} is bracket balanced: ${res}`;
        console.log(msg);
        console.assert(res == testCase.assert,"");
        
    });
}

isBracketBalancedWithStreamTest();