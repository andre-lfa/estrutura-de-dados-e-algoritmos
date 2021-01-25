# O que é um algoritmo?

Um algoritmo é um processo ou uma série de etapas necessárias para realizar uma tarefa.

É um dos pilares para se tornar um melhor solucionador de problemas e desenvolvedor.

### Como melhorar em resolver problemas? 

- Ter um plano para resolver problemas. 
    - Como encarar um problema?
    - Estratégias para simplificar o problema.
- Masterizar padrões de resolução de problemas mais comuns.

### Resolução de Problemas

- **Entenda o problema**
- **Explore exemplos concretos**
- **Divida o problema em partes menores**
- **Resolva / Simplifique**
- **Refatore**

### Entendendo o problema 

- **Posso refazer o problema com minhas palavras?**
    - Tenha certeza que você entendeu o problema, refaça a pergunta ou o desafio com suas próprias palavras para ver se você realmente entendeu qual foi o desafio passado.
- **Quais são os inputs que entram no problema?**
- **Quais são os outputs que devem surgir da solução do problema?**
    - Quais os resultados que devem ser retornados?
    - De que forma eles devem ser retornados?
- **A saída pode ser determinada a partir das entradas? Em outras palavras, tenho informações suficientes para resolver o problema?**
- **Como devo rotular os dados importantes que fazem parte do problema?**

#### Exemplo

Escreva uma função que recebe 2 números e retorne a soma desses números.

1. **Posso refazer o problema com minhas palavras?**
    - *Efetuar a soma de dois número, implementar adição, etc.*
2. **Quais são os inputs que entram no problema?**
    - *A pergunta pode parecer simples, mas na realidade podem surgir diversas dúvidas. Por exemplo, os inputs serão sempre inteiros? Os inputs podem ser strings de números? Os inputs podem ser números gigantescos?* 
3. **Quais são os outputs que devem surgir da solução do problema?**
    - *Ao inserir um inteiro e um float, o retorno deve ser um inteiro?*
4. **A saída pode ser determinada a partir das entradas? Em outras palavras, tenho informações suficientes para resolver o problema?**
    - *O que fazer quando alguém adiciona só um número?* 
5. **Como devo rotular os dados importantes que fazem parte do problema?**
    - *Pode parecer simples com esse exemplo básico, mas em entrevistas normalmente um problema complexo pode ser passado e você precisaria determinar os dados mais importantes, mesmo que sejam nomes de variáveis, por exemplo.* 

### Explorar exemplos

- Comece com exemplos simples
- Prossiga com exemplos mais complexos
- Explore exemplos com inputs inválidos
- Explore exemplos com inputs vazios

#### Exemplo: 

Escreva uma função que recebe uma string e retorna quantas vezes um caracter aparece na string.

Podemos começar com exemplos simples, pra que fique claro o objetivo da função e o que ela espera. 

Por exemplo, poderíamos fazer uma função chamada **charCount()** que recebe uma string como parâmetro. 

Um caso simples poderia ser:

```js
charCount("aaaa"); // {a: 4}
charCount("hello"); // {h:1, e:1, l:2, o:1}
```
Casos complexos podem ser:

```js
charCount("My fone number is 055-500500-0");
// A função deve  ignorar letras maíusculas e minúsculas?
// A função deve retornar o número de espaços vazios? 
// A função deve retornar caracteres especiais como -?
```
No caso de inputs inválidos ou vazios, a função deve retornar algum erro específico? Deve retornar ```null, undefined```? Etc. 

### Dividindo o problema em partes menores 

Muitas vezes em entrevistas de emprego, os recrutadores estão mais preocupados com a forma que você pensa do que com o código em si. Escrever e falar sobre os passos que você está tomando para chegar naquela solução é muito importante para demonstrar sua forma de pensar. Escreva explicitamente os passos necessários que você precisa tomar para resolver o problema.

Isso ajuda você a pensar sobre o código que você irá escrever antes mesmo de escrevê-lo e ajuda a identificar qualquer coisa que possa ter passado batido anteriormente.

Utilizando o exemplo anterior, a função poderia ser quebrada da seguinte forma:

```js
function charCount(str) {
// criar o objeto que será retornado
// fazer um loop pela string e identificar se o caracter na posição já existe como key no objeto
    // se existir, o par terá o contador incrementado
    // se não existir, o par será inserido no objeto cpm valor 1
// retornar o objeto com as informações 
};
```
### Resolva / Simplifique

Comece simples. Caso fique preso em algum ponto do código, ou com alguma dificuldade num ponto específico, não fique preso e obcecado por aquele problema, muitas vezes durante a resolução do problema, você pode ter insights sobre o que fazer naquela parte mais difícil. O ideal é tentar implementar o que você conseguir e voltar nas partes mais complicadas depois.

Aí que entra a parte de simplificar:

- Encontre o ponto de dificuldade do que você está tentando fazer
- Ignore temporariamente essa dificuldade
- Escreva uma solução simplificada
- Então volte sua atenção a dificuldade e inclua no código

Para dar uma olhada na prática, veja o exemplo no arquivo **charCount.js**.

### Refatore

Essa é provavelmente a etapa mais importante quando o objetivo é melhorar e se tornar um bom desenvolvedor. 

Perguntas importantes em relação a refatoração:

- Você pode checar os resultados?
- Você consegue entregar o mesmo resultado de forma diferente?
- Você consegue entender o código só de olhar pra ele?
- Você pode usar a solução ou o método para algum outro problema?
- Você consegue melhorar a performance da solução?
- Você consegue pensar em outras formas de refatorar?
- Como outras pessoas resolveram o problema?

Entender como outras pessoas resolveram o problema é muito importante pra aprender outras formas de resolver um desafio. 

No arquivo **charCount.js**, o problema de contar os caracteres de uma string foi resolvida de uma maneira, entretanto, existem diversas formas de se resolver o mesmo problema. 

Nesse caso específico, utilizamos uma regex (expressão regular) para verificar se os caracteres da strings são **valores numéricos (0-9)** ou **alfanuméricos (a-z)**. 

Entretanto, no caso de JavaScript e alguns navegadores (como o Chrome), expressões regulares tem uma performance menor do que a verificação através do código UTF-16, por isso a versão refatorada utiliza essa estratégia.

Para dar uma olhada na prática, veja o exemplo no arquivo **charCount-refactored.js**.
