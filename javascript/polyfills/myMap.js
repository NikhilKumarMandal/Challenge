// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

const arr = [1, 2, 3, 4];

// create my own Map function

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(cb){
        const result = [];
        for (let i = 0; i < this.length; i++){
            const value = cb(this[i], i);
            result.push(value);
        }
        return result;
    }
}

const arr1 = arr.myMap(e => e * 2);
console.log(arr1);



