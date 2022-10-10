class Parent{
    constructor(){
        this.fatherName = "Hossain";

    }
}
class Child extends Parent{ 
    constructor(name){
        super();
        this.name=name;
    }
    displayNames(){
        return `Child Name = ${this.name}, Father Name = ${this.fatherName}`
    }
}

const baby = new Child('Adnan');
const baby2 = new Child('Tonni');

console.log(baby.displayNames());
