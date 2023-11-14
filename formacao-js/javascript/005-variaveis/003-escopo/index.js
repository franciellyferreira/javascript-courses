/*
    Escopo:
    Determina quais são os dados que podem ser acessados em uma determinada parte do código.
*/

{
    let nome = "Dener";
    console.log(nome);

    const age = 32;
    console.log(age);

    var city = "Rio de Janeiro";
}

// Não deixa acessar variável de fora do escopo
// console.log(nome);
// console.log(age);

// Não utilizar var (depreciada), pois ele pode ser acessado fora do escopo o que causa problema na aplicação
console.log(city);
