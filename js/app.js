"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// ARRAY OPERATIONS //
console.log("---------ARRAY OPERATIONS---------");
// 1.Head
var datos = {
    name: "ana",
    surname: "berove",
    age: 34,
};
var head = function (_a) {
    var name = _a.name;
    return name;
};
console.log(head(datos));
// 2.Tail
var Fruits = ["manzana", "pera", "platano"];
var firstItem = Fruits[0], restItems = Fruits.slice(1);
var tail = function () { return console.log(restItems); };
tail();
// 3.Init
var autos = ["audi", "mercedes", "seat"];
var autosAlemania = autos.slice(0, 2);
var init = function () { return console.log(autosAlemania); };
init();
// 4.Last
var nombres = ["ana", "sofia", "antonio"];
var last = nombres.pop();
console.log(last);
// CONCAT  //
console.log("---------CONCAT---------");
var concat = function (a, b) { return __spreadArrays(a, b); };
console.log(concat([1, 2, 3], ["hola ", "que", "tal"]));
// CLONE MERGE //
// 1.Clone
console.log("---------CLONE---------");
var source = { name: "Maria", surname: "Ibañez", country: "SPA" };
var shallowClone = __assign({}, source);
var deepClone = JSON.parse(JSON.stringify(source));
console.log("shallowClone", shallowClone);
console.log("deepClone", deepClone);
// 
// 2.Merge
console.log("---------MERGE---------");
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
var merge = function (target, source) {
    return __assign(__assign({}, target), source);
};
console.log(merge(a, b));
// READ BOOKS //
console.log("---------READ BOOKS---------");
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].isRead === true) {
            console.log(books[i].title + "  " + "-- este libro se ha leido");
        }
        else {
            console.log(books[i].title + "  " + "-- este  libro no se ha leido");
        }
    }
}
isBookRead(books);
// SLOT MACHINE //
console.log("---------SLOT MACHINE---------");
var generateNumber = function () { return Math.round(Math.random() * 10); };
var generateBoolean = function () { return generateNumber() > 5; };
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
    }
    SlotMachine.prototype.play = function () {
        this.coins++;
        var result1 = generateBoolean();
        var result2 = generateBoolean();
        var result3 = generateBoolean();
        console.log(result1 + " | " + result2 + " | " + result3);
        if (result1 && result2 && result3) {
            console.log("Felicidades !!!.Has ganado " + this.coins + " coins!!");
            this.coins = 0;
        }
        else {
            console.log("prueba otra vez");
        }
    };
    return SlotMachine;
}());
function startPlay() {
    var machine1 = new SlotMachine();
    for (var i = 0; i < 5; i++) {
        machine1.play();
    }
}
startPlay();
