﻿// it is asked to set each key in all languages. otherwise the dictionary won't work
var index = {
    zh_CN:{
        language:                   "中国",
        navigationBarTitleText:     "我的应用程序",
        helloText:                  "你好",
        calcText:                   "计算器" 
    }, 
    fr_FR:{
        language:                   "français",
        navigationBarTitleText:     "index",
        helloText:                  "bonjour",
        calcText:                   "calculatrice"
    },
    en:{        
        language:                   "english", 
        navigationBarTitleText:     "index",
        helloText:                  "hello",
        calcText:                   "calculator"
    }
}

//======================


function getJson(language) {//TODO check if the language exists otherwise, return the default language
    return index[language]//JSON.parse(indexJsonText)[language];
}

function getLanguages() {
    var languages = []
    for (var key in index) {//list of languages
        languages.push(index[key].language)
    }
    return languages
}

function getEquivalence(language){//equivalence between full language name and short language name
    for (var key in index) {
        if(index[key].language == language){
            console.log(index[key].language, key)
            return key
        }
    }
    return "en"//default value normally, we should never arrive here because we only use values from the definied list

}

//======================


//used for datas of function to be used outside this file
module.exports = {
  getJson: getJson,
  getLanguages: getLanguages,
  getEquivalence: getEquivalence
}