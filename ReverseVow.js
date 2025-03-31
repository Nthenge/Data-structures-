//Reverse Vowels of a String
var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU";
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            stack.push(s[i])
        }
    }

    let result = "";
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            result += stack.pop()
        }
        else{
            result += s[i]
        }
    }
    return result;
};