const arr = [];



    Array.prototype.myPush = function (data) {
        this[this.length] = data;
        return this.length
    }
    
arr.myPush(20)
arr.myPush(30)
arr.myPush(40)
console.log(arr);

