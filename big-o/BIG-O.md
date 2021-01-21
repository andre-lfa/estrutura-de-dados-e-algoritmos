# Para que serve?
A notação Big O é utilizada para descrever a complexidade de uma sessão de código em termos de tempo e espaço. 

-   Tempo: A complexidade de tempo de Big O descreve como o tempo de execução aumenta conforme o input também aumenta no pior cenário.
    
-   Espaço: Descreve quanta memória é necessária para executar uma sessão do código no pior cenário.

## Tempo

No exemplo abaixo, existem duas funções que tem o mesmo objetivo, calcular todos os valores de input começando com 1 até o valor do input. Ex: caso o input seja 5, o resultado será 15 (1+2+3+4+5).

![](https://lh4.googleusercontent.com/Z9NkW2_DEVCt0ur3aLseTNlUYHgZkts_GgdEuJFmxy_kSQohK7FAPQdeXdTBBGXYsK3NXccg1k7k4BTo_k_CpH5MWjY9kHL1pthjOK7OLsKGoojSaMZaSk8QJX24xltMfaKGVnTO)

A primeira função tem complexidade O(1) porque independente do valor passado, seja 1000 ou 100000000, a função sempre irá executar 3 operações.

A segunda tem complexidade O(n) porque o número de operações que a função irá executar depende diretamente do valor que é passado, sendo sempre um múltiplo de n (como o objetivo não é considerar minuciosidades, podemos simplificar para O(n)).

Em casos onde o código possui um loop dentro de outro loop, normalmente a notação para esses casos é O(n²). Isso significa que o tempo de execução vai ser (n * n) a medida que o input também cresce. Por exemplo, caso o input seja 4, o número de operações da função seria 16. ![](https://lh5.googleusercontent.com/NtpJwiMgwGCVHBEdIWcD4rJYhAvAs75vMUZgKTEXBUBn6qm8w1iOS_7NR-aOKMJR3BXhU-kAHFm6U5IkLcIGzJmzvh_4VDIxqlBh3OjRZmJ0FrZyp4kogGkBahsEVYmHzDwt_d9B)

### Simplificando notações Big O

-   **Constantes não importam:** Independente se um algoritmo tem notação O(2), O(500), O(1000), todos podem ser simplificados para O(1), assim como O(2n), O(10n) podem ser simplificados para O(n).
    

![](https://lh4.googleusercontent.com/acc8Woh4S__l_nasnMxz9Lo_uWwJk93EMU8swh1k7BwMEdYKLOqxKvxBURxS-aUWmAGzcy1vSSwb3-JPGJ0xbC1LCZD0jHgQ82-y_iZl5ywLT0p7B-bQzhLq37STWc_Q-HzX-nnZ)

-   **Termos menores não importam:** Sempre utiliza-se o termo com a maior complexidade para categorizar a notação Big O.
    

![](https://lh5.googleusercontent.com/fvo6kX7ywJEnOQ1EewU3DGiIK50twkE5gVCpTkRugt2knZjCwcVB674W09ucUrd8frxpslAdQS4uaNTc5Wg0OSW4J40W1XEUgXr2Pz3VEmlVj2WrmczauwQ1cs2YBivlL1b3Px4D)

### Big O - “Atalhos” (Shorthands)

1.  Operações aritméticas são constantes
    
2.  Passar um valor a uma variável é constante (var a = 100)
    
3.  Acessar elementos em um array (pelo index) ou objetos (por chaves) são constantes.
    
4.  Em um loop, a complexidade é o tamanho do loop vs a complexidade do que acontece dentro do loop. Por exemplo, em casos onde se tem um loop dentro de um loop, provavelmente a complexidade passa a ser O(n²)
    

### Resumo Gráfico

![](https://lh6.googleusercontent.com/vAP3IV739Z63Ywe6xXVm7VsymRMyBPJOGklfxEe-r6BUz_RG0fwl-ACpDZvyvJ280yaCvtKKiwLSmkNPgsZCWQT8a7npIZB-RK1ZeqJtPXRXQGFT7SKhhplMoQ-NjOpgcTUpxPdC)

## Espaço

No exemplo abaixo, são declaradas apenas duas variáveis do tipo inteiro, e durante o decorrer do código não existe mais alocação de espaço para atender ao algoritmo (apesar dos valores das variáveis mudarem, o espaço que elas ocupam permanece o mesmo), por isso a notação Big O de espaço nesse caso é O(1), constante.  

![](https://lh5.googleusercontent.com/Ms5l5znKravnyC3LR4Th7OzjEhLHJm-sb3ELCpGvdszbdBzebNIui9H-NlVI397AoPKlO0fHhIGh2PmRxobrj7cUCcwI07cFQBZZRVYS9X7lJKy1V0lTzuOJtuyF8u39lThgTgXl)

No outro exemplo abaixo, o espaço ocupado é diretamente proporcional a n, ou seja, ao input da função. Caso n seja igual a um array com 10 elementos, o novo array gerado também terá 10 elementos, ou seja, ocupou um espaço diretamente proporcional a n.  

![](https://lh3.googleusercontent.com/mV0MpItK0CAF3b32sYrBmQZlFPCERq2CrgrRXX3h0qzk-7ITMUvcVQ1V1cf6YKFUGS88Y8p6wLlkJG1t8NOuU1LqHG1IMshDSNhp_eRqtbGBTzfCPXlGpHg6ug_qMhGr5zajnWdl)

### Regras de ouro:

-   Tipos primitivos(booleans, numbers, undefined, null) normalmente ocupam espaço O(1), o que significa que são constantes.
    
-   Strings ocupam O(n), onde n é o tamanho da string.
    
-   Tipos de referência são geralmente O(n), onde n é o tamanho do array ou o número de chaves do objeto.
