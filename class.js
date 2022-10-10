class Student{
    constructor(name,id,age){
        this.name = name;
        this.id = id;
        this.age = age;
        this.uniName = 'City';
    }
}

const student1 = new Student('mahi',101,23);
const student2 = new Student('Ahsan',103,24);

console.log(student1,student2)