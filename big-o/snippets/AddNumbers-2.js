// A função abaixo utiliza uma fórmula matemática para contar os elementos de 1 até o número inserido. 

// Por utilizar uma fórmula, a complexidade desse algoritmo é de O(1), constante, porque o número de operações do algoritmo 
// será sempre 3 (1 multiplicação, 1 soma e 1 divisão), independente do número inserido.

function addNumbers(n) {
    return n * (n + 1) / 2;
}

console.log(addNumbers(5));

console.time("addNumbers");
addNumbers(1000000000);
console.timeEnd("addNumbers");