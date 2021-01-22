# Arrays

Arrays são estruturas de dados ordenados, que podem conter diversos tipos de valor, incluindo objetos. 

## Quando utilizar arrays?

- Quando tem necessidade de ordenação.
- Quando se precisa de acesso/inserção/deleção rápidas, a utilização depende dos dados inseridos do array.

## Big-O de arrays

- **Inserção** - Depende
- **Remoção** - Depende
- **Busca** - O(n)
- **Acesso** - O(1)

Inserção e Remoção de elementos do Array depende diretamente da posição onde estamos inserindo ou removendo os dados. Nos casos onde é necessário inserir no final do array, a notação Big-O normalmente é **O(1)**, porque não existe muita coisa a se fazer além de criar um novo index no array e adicionar o valor, o mesmo vale para remover um valor no final de um array.

Entretanto, adicionar e remover elementos no início de um array normalmente tem notação **O(n)**, porque além de adicionar ou remover o elemento no começo do array, *é necessário alterar todos os outros indexes a partir daquele ponto*. Uma complexidade bem maior.

Por esse motivo, métodos como ***push()*** e ***pop()*** são sempre mais rápidos que ***shift()*** e ***unshift()***.
