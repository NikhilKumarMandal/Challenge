
let obj = {
    "userName": "nikhil",
    "age": 69,
    "password": "udkdncd"
};

const proxyUser = new Proxy(obj, {
    get(target,prop) {
        if (prop === "password") {
            throw new Error("Access Denied!")
        };
        return target[prop];
    }
})

console.log(proxyUser.password);
