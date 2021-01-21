# Objetos

Objetos são estruturas de dados desordenados, contendo um par de chaves e valor. São desordenados porque objetos não tem um início ou um final.

## Quando utilizar objetos?

- Quando não tem necessidade de ordenação.
- Quando você precisa de acesso/inserção/deleção rápidas.

## Big-O de objetos

- **Inserção** - O(1)
- **Remoção** - O(1)
- **Busca** - O(N) *
- **Acesso** - O(1)

Ao falar de busca, não significa buscar uma chave no objeto (isso seria acessar) e sim checar se um valor existe naquela chave, por exemplo, verificar se o valor 1 existe no array [1,2,3,4] da chave **favoriteNumbers** no objeto abaixo. 

```js
let  instructor  = {
name:  "Instructor name",
isInstructor:  true,
favoriteNumbers: [1,2,3,4]
}
```


