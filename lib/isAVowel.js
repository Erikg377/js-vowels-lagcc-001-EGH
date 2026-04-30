'use strict';

var isAVowel = function(ltr){
  if (ltr === "a" || ltr === "e" || ltr === "i" || ltr === "o" || ltr === "u") {
    return true;
  } else {
    return false;
  }


};

module.exports = isAVowel;
