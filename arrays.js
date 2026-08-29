const n = [1, 2, "Abhi"];
n.push("MAaaaa");
console.log(n);
n.pop();
console.log(n);

const arr2 = new Array("hello");
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr3);

let arr5 = [1, 2, 3, 4, 5];
arr5.length = 10;
console.log(arr5.length);
console.log(arr5);

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let value of arr6) {
    console.log(arr6);
}

let arr7 = [
    1,
    { name: "Abhi" },
    function () { console.log("you are in function"); },
    true,
    null,
    undefined
];
for (let value of arr7) {
    if (typeof value == "function") {
        value();
    } else {
        console.log(value);
    }
}
for (let index in arr7) {
    console.log(arr7[index]);
}

let arr8 = [1, { name: "John" }, function () { console.log("Hello") }, true, null, undefined];
for (let index in arr8) {
    console.log(arr8[index]);
}

let arr9 = [1, 2, 3, 4, 5];
arr9.shift();
console.log(arr9);

let arr10 = [1, 2, 3, 4, 5];
arr10.reverse();
console.log(arr10);

let arr11 = [1, 2, 3, 4, 5];
arr11.sort();
console.log(arr11);
