const input = document.getElementById('input');
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const remainder = document.getElementById('remainder');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');

zero.addEventListener('click',()=>{
    input.value+= "0";
})
one.addEventListener('click',()=>{
    input.value+= "1";
})
two.addEventListener('click',()=>{
    input.value+= "2";
})
three.addEventListener('click',()=>{
    input.value+= "3";
})
four.addEventListener('click',()=>{
    input.value+= "4";
})
five.addEventListener('click',()=>{
    input.value+= "5";
})
six.addEventListener('click',()=>{
    input.value+= "6";
})
seven.addEventListener('click',()=>{
    input.value+= "7";
})
eight.addEventListener('click',()=>{
    input.value+= "8";
})
nine.addEventListener('click',()=>{
    input.value+= "9";
})
divide.addEventListener('click',()=>{
    input.value+= "/";
})
multiply.addEventListener('click',()=>{
    input.value+= "*";
})
plus.addEventListener('click',()=>{
    input.value += "+";
})
minus.addEventListener('click',()=>{
    input.value+= "-";
})
equal.addEventListener('click',()=>{
    input.value = eval(input.value);
})
dot.addEventListener('click',()=>{
    input.value+= ".";
})

clear.addEventListener('click',()=>{
    input.value = "";
})
remainder.addEventListener('click',()=>{
    input.value+= '%';
})
backspace.addEventListener('click',()=>{
    const value = input.value;
    input.value = value.slice(0,-1);

})
