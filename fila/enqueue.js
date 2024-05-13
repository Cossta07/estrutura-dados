let fila = [];
fila.enqueue = function(item) {
    fila.push(item);
};

fila.enqueue(1);
fila.enqueue(2);
console.log(fila);