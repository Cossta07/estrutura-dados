Array.prototype.isEmpty = function(){
    return this == 0
};

let pilha = [];
console.log (pilha.isEmpty()); // Saída: true
pilha.push(10);
console.log(pilha.isEmpty()); // Saída: false