// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

if (!Object.prototype.myLength) {
    Object.prototype.myLength = function (cb) {
        let count = 0;
        for (let _ of this) {
            count++;
        };
        return count++
    };
}


const arr = [1, 2, 3, 4, 5];
console.log(arr.myLength());