function A() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    })
}

async function B() {
    const b = await A();
    const c = await A();
    return b + c;
}


B().then(data => console.log(data));