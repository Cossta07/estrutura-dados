const person = {
    name:"samuel",
    age:18,
    city: "VArzeaGRande"

};
Object.freeze(person)
person.age = 11;// elemento não afetado devido ao congelamento
console.log(person);
