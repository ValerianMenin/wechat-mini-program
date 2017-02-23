var indexJsonText = '{ "zh_CN":{ "navigationBarTitleText":"我的应用程序","helloText":"你好","calcText":"计算器" }, "fr_FR":{ "navigationBarTitleText":"index","helloText":"bonjour","calcText":"calculatrice" }, "en":{ "navigationBarTitleText":"index","helloText":"hello","calcText":"calculator" } }'

var languages = ["中国","français","english"]
//var languages = ["中国","français","english"]["zh_CN","fr_FR","en"]
var equivalence = '{ "中国":"zh_CN","français":"fr_FR","english":"en" }'
//======================


function getJson(language){//TODO check if the language exists otherwise, return the default language
    return JSON.parse(indexJsonText)[language];
}

function getLanguages(){
    return languages
}

function getEquivalence(language){
    return JSON.parse(equivalence)[language];
}

//======================


//used for datas of function to be used outside this file
module.exports = {
  getJson: getJson,
  getLanguages: getLanguages,
  getEquivalence: getEquivalence
}