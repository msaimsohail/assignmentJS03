var a = ["a", "b", "c", "d", "e", "f", "g"];
a.push("z");
console.log(a);


a.pop();
console.log(a); 


a.shift();
console.log(a);


a.unshift("salam");
console.log(a);


a.slice("2,3");
console.log(a);


a.splice(2,3);
console.log(a);

var b = a.splice(2,3);
console.log(a);
console.log(b);

var b = a.slice(2,3);
console.log(a);
console.log(b);


a.splice(2, 1, "x", "y", "z");
console.log(a);

var i = a.indexOf("c");
var b = a.length;
console.log(b);



for(var i = 0; i < 10; i++){
    console.log("Table");
}



for(var i = 0; i < 10; i++){
    console.log("2 x " + (i + 1) + " = " + 2 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("5 x " + (i + 1) + " = " + 5 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("10 x " + (i + 1) + " = " + 10 * (i + 1));
}
