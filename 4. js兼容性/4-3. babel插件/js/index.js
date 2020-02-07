const obj = {
    foo: {
        bar: {
            baz: 42,
        },
    },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined

console.log(baz, safe)