class Stack{
    constructor(){
        this.stack = [];
    };

    push(data) {
        this.stack.push(data)
    }

    pop() {
        this.stack.pop()
    }

    printStack() {
        let str = '';
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + '\n' 
        };
        return str;
    }
}

const stack = new Stack();
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
console.log(stack.printStack());
