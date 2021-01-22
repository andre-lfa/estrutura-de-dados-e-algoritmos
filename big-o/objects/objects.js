let instructor = {
    name: "Instructor name",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

// Os métodos .keys, .values e .entries tem a notação de O(n) porque dependem diretamente do número de elementos do objeto,
// então a medida que o objeto cresce, ao se adicionar mais elementos, o número de operações que o algoritmo tem que executar também aumenta
console.log(Object.keys(instructor)); // O(n)
console.log(Object.values(instructor)); // O(n)
console.log(Object.entries(instructor)); // O(n)

// o método .hasOwnProperty apenas verifica se uma chave existe no objeto, dessa forma, a notação é constante O(1) porque
// independente do número de elementos, ele faz somente uma operação
console.log(Object.hasOwnProperty("name")); // O(1)

