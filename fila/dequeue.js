let fila = [1,2,3];

Array.prototype.dequeue = function() {
    return this.shift();
};

console.log(fila.dequeue());
console.log(fila);