/*
    Para realizar comparações de valores utiliza-se:
        ==
        ===
        !=
        !==
        >
        <
        >=
        <=
*/

// não analisa o tipo do campo

console.log(1 == 1);
console.log(1 == "1");  

console.log(1 != 2);
console.log(1 != "1");

// analisa o tipo do campo além do valor, ou seja, tem que ser exatamente igual

console.log(1 === "1");  
console.log(1 === 1);

console.log(1 !== "1");
console.log(1 !== 1);


// maior ou menor

console.log(1 > 2);
console.log(3 > 2);
console.log(1 < 2);
console.log(3 < 2);


// maior ou menor igual

console.log(1 >= 2);
console.log(1 >= 1);
console.log(1 <= 2);
console.log(1 <= 1);


