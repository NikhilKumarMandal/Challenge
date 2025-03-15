class MyPromise {
    constructor(executerFn) {
        this._state = 'Pending'
        this._successCallback = []
        this._errorCallback = []
        this._finallyCallback = []
        this.value = undefined;
        executerFn(
            this.executeResolverFn.bind(this),
            this.executeRejecterFn.bind(this)
        )
    }

    executeResolverFn(value) {
        if (this._state !== 'Pending') return; 
        this.value = value
        this._state = 'Fulfilled'
        this._successCallback.forEach((cb) => cb(value));
        this._finallyCallback.forEach((cb) => cb());
    }

    executeRejecterFn(e) {
        if (this._state !== 'Pending') return;
        this._state = 'Rejected'
        this._errorCallback.forEach((cb) => cb(e));
        this._finallyCallback.forEach((cb) => cb());
    }

    then(cb) {
        if (this._state === 'Fulfilled') {
            cb(this.value);
            return this;
        }
        this._successCallback.push(cb);
        return this;
    }

    catch(cb) {
        if (this._state === 'Rejected') {
            cb(this.value);  
            return this;
        }
        this._errorCallback.push(cb);
        return this;
    }

    finally(cb) {
        if (this._state !== 'Pending') {
            cb();
            return this;
        }
        this._finallyCallback.push(cb);
        return this;
    }
}





function wait(seconds) {
    return new MyPromise((resolve,reject) => {
        resolve("hee")
    })
}

const p = wait(5);

p.then((a) => console.log("THEN ",a))
    .catch(() => console.log("CATCH"))
    .finally(() => console.log('FINALLY'))


