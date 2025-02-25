const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myPop = function () {
    if (this.length === 0) return null;
    this.length = this.length - 1;
}   

arr.myPop()
arr.myPop()
console.log(arr);
