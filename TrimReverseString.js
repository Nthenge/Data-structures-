var reverseWords = function(s){
    return s.trim().split(/\s+/).reverse().join(" ");
}

let a = " I like you    "
console.log(reverseWords(a))