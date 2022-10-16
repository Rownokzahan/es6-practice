function doSomething(){
    console.log(101)
}
setTimeout(doSomething); // it will work after every statement is compiled
setTimeout(doSomething,3000); //it will work 3 second after every statement is compiled

setTimeout(function(){
    document.body.style.backgroundColor='lightpink';
},1000); 

setTimeout(()=>{
    document.body.style.color='white';
},2000); //using Arrow function


setInterval(() => {
    document.body.style.backgroundColor='yellow';
}, 3000);// After every 2 second the function will be called
setInterval(() => {
    document.body.style.backgroundColor='red';
    document.body.style.textAlign='center';
}, 4000);
console.log(102);
console.log(103);
console.log(104);