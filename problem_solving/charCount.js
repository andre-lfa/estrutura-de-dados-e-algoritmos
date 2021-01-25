function charCount(str) {
    // criar o objeto que será retornado
    var obj = {};
    // fazer um loop pela string e identificar se o caracter na posição já existe como key no objeto
    for(let i=0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            // se existir, o par terá o contador incrementado
           if (obj[str[i]] > 0) {
               obj[str[i]] ++;
            } 
            // se não existir, o par será inserido no objeto com valor 1
            else {
               obj[str[i]] = 1;
           }
        }
    }
    return obj;
    // retornar o objeto com as informações 
};

console.log(charCount("Hello hi!"));