let array = [1,2,3,4,5]
let index = array.findIndex(function(element){
    return element > 3;
});
console.log(index);
// saída 3 (indice do primeiro elemente maior que 3)