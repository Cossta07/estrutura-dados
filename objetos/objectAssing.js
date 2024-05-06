const target = {a: 1, b: 8};
const source = {b:6, c:5};

const merged = Object.assign({}, target, source);
console.log(merged);