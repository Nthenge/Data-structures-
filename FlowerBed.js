//Can Place Flowers
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let length = flowerbed.length;

    for(let i = 0; i < length; i++){
        if(flowerbed[i] === 0){
            let emptyLeft = (i === 0) || (flowerbed[i - 1] === 0)
            let emptyRight = (i === length - 1) || (flowerbed[i + 1] === 0);
            if(emptyLeft && emptyRight){
                flowerbed[i] = 1;
                count++;
                if(count >= n) return true

                i++
            }
        }
    }
    return count >= n;
};