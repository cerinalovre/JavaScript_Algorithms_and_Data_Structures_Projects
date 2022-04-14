function isAlphaNum(char) {
    return char.match(/[a-z]/i) || char.match(/[0-9]/);
  }
  
function palindrome(str) {
    str = str.toLowerCase();
    const normalStr = '';
    const reversedStr = '';
  
    for (let i = 0; i < str.length; i++) {
        if (isAlphaNum(str[i])) {
            normalStr = normalStr + str[i];
            reversedStr = str[i] + reversedStr;
      }
    }
    return normalStr === reversedStr;
  }
  
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("not a palindrome"));
