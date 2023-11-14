/*
    Armazenar dados e reutilizar em outros locais.

    var - não é mais utilizado, pois é usado globalmente 
    let - ele é utilizado dentro de um escopo
    const - ele é utilizado dentro de um escopo, porém podemos armazenar dados apenas 1x

    Evitar palavras reservadas, bem descritas com nomes dentro do contexto para melhores práticas de manutenção de código.
*/

var cachorro = "Kyara";
console.log(cachorro);
cachorro = "Teca"
console.log(cachorro);

let lanche = "Bolovo";
console.log(lanche);
lanche = "Misto Quente";
console.log(lanche);

const nome = "Dener";
console.log(nome);

/*
    Vai exibir um erro, pois const não é possível ser alterado.

    nome = "Dener Silva";
    console.log(nome);
*/