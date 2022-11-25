var legend = new Object({ "fullName": "m.umer", "age": 20}) //Bacha Nahi Ho Sir
console.log(legend);

function legend(obj) {
    this.name = obj.fullName
    this.age = obj.age
}

var legend_contructor = new legend({ fullName: "m.umer", age: 20}) //Bacha Nahi Ho Sir
console.log(legend);