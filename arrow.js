// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);

// const doubleIt = function double(num){
//     return num*2;
// }
// const result = doubleIt(5);


//arrow function

const doubleIt = (num) => num*2; //function with one parameter
doubleIt(24);

const add = (num1,num2) => num1 +num2; //function with two parameter
add(50,370);

const give5 = () => 5; // function with no parameter
give5();

// function with multiple line
const calculate = (x,y) =>{
    let add =x+y;
    let diff = x-y;
    let mul =x*y;
    let div =x/y;
    let result = `Sum = ${add}, Diff= ${diff}, Mul = ${mul}, Div= ${div}`;
    return result;
}
let result = calculate(10,5);
console.log(result);