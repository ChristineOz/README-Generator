const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require('./Markdown.js');


inquirer.prompt(
    [
        {
            type: 'input',
            message:"What's the project title?",
            name:`title`,
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'how do you install your app?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'How do you use your app?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'Who contributed?',
            name: 'contribution',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'any credit?',
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'Instructions to follow?',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'any credit?',
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            //list of license
            type:'list',
            message:'What license did you use?',
            name: 'license',
            choices:['The MIT License', 'The GPL License','Apache License','GNU License','N/A'],
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'Github username:',
            name:'git',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            messgae:'E-mail:',
            name:'email',
            validate:(value)=>{ if(value){return true} else {return 'I need a value to continue'}},
         },
]
).then(({
    title,
    installation,
    usage,
    contribution,
    instructions,
    credits,
    license,
    git,
    email

})=>{
    //template to be used
    const template =`# ${title}
    
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[Instructions](#instructions)
    *[Credits](#credits)
    *[License](#license)
    #Installation
    ${installation}
    #Usage
    ${usage}
    #Contribution
    ${contribution}
    #Instructions
    ${instructions}
    #Credits
    ${credits}
    #License
    ${license}

    #Contact
    *Github :${git}
    *E-mail :${email}`;
//function to create our readme using fs
    createNewFile(title,template);
}
);
//creating our createNewFile function
 function createNewFile(fileName,data){
 //fs
 fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated');
 })    
}

///Installed Packages
