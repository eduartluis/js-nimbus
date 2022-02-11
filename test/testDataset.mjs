export const testDataset = [
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
         {text:"abc...xyz{abc...xyz}abc...xyz{}",assert:true},
         {text:"{}abc...xyz{abc...xyz}abc...xyz",assert:true},
         {text:"abc...xyz{abc...xyz}{}abc...xyz",assert:true},
         {text:"{",assert:false},
         {text:"}",assert:false},
         {text:"}{",assert:false},
         {text:"{}{",assert:false},
         {text:"}{}",assert:false},
         {text:"{{}}}",assert:false},
         {text:"{{}}{{}}}",assert:false},   
         {text:"{abc...xyz",assert:false},   
         {text:"abc...xyz}",assert:false},
         {text:"abc...xyz{abc...xyz}{}abc...xyz}",assert:false},         
         {text:"{abc...xyz{abc...xyz}{}abc...xyz",assert:false},
    ];