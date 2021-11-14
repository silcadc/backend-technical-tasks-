class person {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
}
// const pers = new person("Paola", 25, 1.65, 50);
// console.log(pers)

class employee extends person {
    constructor(name, age, height, weight, salary, profile) {
        super(name, age, height, weight);
        this.salary = salary;
        this.profile = profile;
    }
}

const emplo_1 = new employee("Andres", 25, 1.65, 50, 1.200, "law");
const emplo_2 = new employee("Aleja", 15, 1.75, 60, 200, "receptionist");
const emplo_3 = new employee("Paola", 35, 1.95, 80, 300, "engineer");
console.log(emplo_1, emplo_2, emplo_3)

class customer extends person {
    constructor(name, age, height, weight, budget, status) {
        super(name, age, height, weight);
        this.budget = budget;
        this.status = status;
    }
}

const custo_1 = new customer("Carlos", 37, 1.75, 70, 500.000, "VIP");
const custo_2 = new customer("Cristina", 28, 1.70, 60, 100.000, "normal");
const custo_3 = new customer("Armando", 40, 1.65, 80, 20.000, "normal");
console.log(custo_1, custo_2, custo_3)