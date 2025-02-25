class Stack{
    constructor(){
        this.stack = [];
    };

    push(data) {
        this.stack.myPush(data)
    }

    pop() {
        this.stack.myPop()
    }

    printStack() {
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + '\n' 
        };
        return str;
    }
}

Array.prototype.myPush = function (data) {
    this[this.length] = data;
}

Array.prototype.myPop = function () {
    if (this.length === 0) return null;
    this.length = this.length - 1;
}  

const stack = new Stack();
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.pop()
console.log(stack.printStack());
