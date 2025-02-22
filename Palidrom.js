function Palidrome (a) {
    if (a < 0)
        return "Negative number"
    
    let number = a
    let reversed = 0

    while (number > 0){
        reversed = reversed * 10 + number % 10;
        number = parseInt(number /10);
    }

    return a === reversed
    
}
const a = 121
console.log(Palidrome(a))