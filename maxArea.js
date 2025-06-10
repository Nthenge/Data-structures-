function maxArea(height){
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;
        maxArea = Math.max(maxArea, currentArea);
        if(height[left] < height[right]) left += 1;
        else right -= 1;
    }
    return maxArea;
}

height = [1,8,6,2,5,4,8,3];

console.log(maxArea(height));