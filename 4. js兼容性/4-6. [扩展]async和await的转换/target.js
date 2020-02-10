"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, arg) {
    try {
        var info = gen.next(arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }

    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(data => {
            _next(data);
        });
    }
}


function A() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(3);
        }, 1000);
    });
}

function B() {
    var fn = function* () {
        const b = yield A();
        const c = yield A();
        return b + c;
    };
    return new Promise(function (resolve, reject) {
        var gen = fn();
        function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, value);
        }
        _next(undefined);
    });
}

B().then(function (data) {
    return console.log(data);
});