const person = {
    name:"samuel",
    age:18,
    city: "VArzeaGRande"

};

Object.seal(person);
person.age = 31;// terá efeito
person.guander = "masculino";//não terá efeito
console.log(person);
