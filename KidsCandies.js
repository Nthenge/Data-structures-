// Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {
    let maxKid = Math.max(...candies);
    let result = [];

    for(let i = 0; i < candies.length; i++){
        result.push(candies[i] + extraCandies >= maxKid)
    }
    return result;
};