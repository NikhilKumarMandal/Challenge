const arr = [1,2,4,5,6,7,8,9]

function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                return target[target.length + index];
            }
            return target[index]
        },
        set(target, prop, value) {
            const index = Number(prop);

            if (index < 0) {
                target[target.length + index] = value
            } else {
                target[index] = value;
            }

            return true;
        }
    })
}

const newArr = negativeIndex(arr);
console.log(newArr[-1] = 10);
console.log(newArr[-1]);
