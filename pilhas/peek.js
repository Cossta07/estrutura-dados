Array.prototype.peek = function(){
    return this[this.length - 1];
};
let pilha = [10, 20, 30];
let topo = pilha.peek(); // Retorna 30 sem remover
console.log(topo); // Saída: 30 
console.log(pilha); // Saída: [10, 20, 30]