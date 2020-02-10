"use strict";

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _classCallCheck(instance, Constructor) {
    //判断instance 是不是Constructor的实例
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

//props: [{key:"xxx", value:"xxxxxx"}, {key:"ccc", value:function(){}}]
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value, enumerable: true, configurable: true, writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var A =
    //该立即执行函数的返回结果，应该是一个构造函数A
    function () {

        //构造函数A，对应类中的constructor
        function A() {
            //转换：参数默认值
            var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
            //类调用检查
            _classCallCheck(this, A);
            //定义一个属性：给this定义一个属性prop1，赋值为1，类似于 this.prop1 = 1;
            _defineProperty(this, "prop1", 1);
            //将箭头函数方法，作为普通属性定义，箭头函数方法并不在原型上
            _defineProperty(this, "method2", function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                console.log(args);
            });

            this.prop2 = b;
        }

        //为构造函数A，定义原型方法，以及静态方法
        _createClass(A, [{
            key: "method1",
            value: function method1() {
                console.log("method1");
            }
        }], [{
            key: "method3",
            value: function method3() {
                console.log("method3", this);
            }
        }]);

        return A;
    }();

_defineProperty(A, "method4", function () {
    console.log("method4", A);
});