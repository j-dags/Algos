function findThreeLargestNumbers(array) {
    // Write your code here.
    return bubbleSorts(array).slice(array.length - 3, array.length);
}
var bubbleSorts = function (inputArr) {
    var len = inputArr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                var tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
console.log(findThreeLargestNumbers([13, 10, 5, 3, 1]));
