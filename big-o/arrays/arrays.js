var arrayOriginal = ["Claudio", "João", "Marcio", "Fernando"];
console.log("Array original: ")
console.log(arrayOriginal);

function adicionaUltimoElemento() {
    let functionArray = arrayOriginal;
    // O método push() tem notação O(1) porque somente cria um novo index no array e adiciona o valor necessário, sem precisar
    // alterar outros indexes
    functionArray.push("Roberta");

    console.log("Array alterado: ")
    console.log(functionArray);
}

function removeUltimoElemento() {
    let functionArray = arrayOriginal;
    // O método pop() tem notação O(1) assim como o push() porque também não tem a necessidade de alterar outros indexes.
    functionArray.pop();

    console.log("Array alterado: ")
    console.log(functionArray);
}

function removePrimeiroElemento() {
    let functionArray = arrayOriginal;
    // O método shift() tem notação O(n) porque removendo o primeiro elemento do array, existe a necessidade de alterar outros indexes.
    functionArray.shift();

    console.log("Array alterado: ")
    console.log(functionArray);
}

function adicionaPrimeiroElemento() {
    let functionArray = arrayOriginal;
    // O método unshift() tem notação O(n) porque adicionando o primeiro elemento do array, existe a necessidade de alterar outros indexes.
    functionArray.unshift("Roberta");

    console.log("Array alterado: ")
    console.log(functionArray);
}

function ordenaElementosDoArray() {
    let functionArray = arrayOriginal;
    // A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode ser garantido e depende da implementação realizada.
    // Entretanto, normalmente tem complexidade O(n log n)
    functionArray.sort()

    console.log("Array alterado: ")
    console.log(functionArray);
}

//adicionaUltimoElemento();
//removeUltimoElemento();
//removePrimeiroElemento();
//adicionaPrimeiroElemento();
//ordenaElementosDoArray();