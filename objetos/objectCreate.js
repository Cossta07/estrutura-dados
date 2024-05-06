const personPrototype = {
    greet: function() {
    console.log('cruzeiro é ${this.name}');
}
};

const ObjSamuel = Object.create(personPrototype);
ObjSamuel.name = "samuel";
ObjSamuel.greet();