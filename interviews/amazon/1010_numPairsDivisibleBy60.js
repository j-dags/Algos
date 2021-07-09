/*
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Approach:
Make a hash array
For each time in array:
- take val = time modulo 60
- total count += the hash value of (60 - val) % 60
- put val into hashArray

O(n)t | O(n)s
*/


 var numPairsDivisibleBy60 = function(time) {
    let hashMap = new Array(60).fill(0);
    let c = 0;
    for (let i = 0; i < time.length; i++) {
        let val = time[i] % 60;
        c += hashMap[(60 - val) % 60];
        hashMap[val] += 1;
    }
    return c;
}