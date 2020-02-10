class A {
    prop1 = 1;

    method2 = (...args) => {
        console.log(args);
    }

    constructor(b = 2) {
        this.prop2 = b;
    }

    method1() {
        console.log("method1");
    }

    

    static method3() {
        console.log("method3", this);
    }

    static method4 = () => {
        console.log("method4", this);
    }
}

