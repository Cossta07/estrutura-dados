let meuArray = [1, "dois", {nome: "joão"}, [4,5,6], function() { return "função dentro de um array";}];

// adicionando elementos do array
console.log(meuArray[0]); // saída 1
console.log(meuArray[2]); // saída  {nome: "João"}

// adicionando elmentos do array
meuArray.push(7);
console.log(meuArray);

meuArray.forEach(function(element){
    console.log(element);
        });