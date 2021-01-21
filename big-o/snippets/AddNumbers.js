// A função abaixo utiliza um loop for para contar os elementos de 1 até o número inserido. 

// Por utilizar um loop, a complexidade desse algoritmo é de O(n), porque o número de operações do algoritmo é diretamente
// proporcional ao número de elementos da função.

function addNumbers(num) {
    let total = 0;
    for (i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}

console.log(addNumbers(5));

console.time("addNumbers");
addNumbers(1000000000);
console.timeEnd("addNumbers");