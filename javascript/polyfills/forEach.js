// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.


// For Each
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(cb) {
    originalArray = this;

    for (let i = 0; i < originalArray.length; i++){
        cb(this[i],i);
    }
}
}
const arr = [1, 2, 3];

arr.myForEach((e,i) => {
    console.log(`value: ${e} at index: ${i}`);
});

