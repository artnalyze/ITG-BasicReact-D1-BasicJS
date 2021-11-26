
// === Basic Function
// create function
function hello(input) {
    const output = input + ' nice to meet you.';
    return output;
}

// call function
console.log(hello('Artdvp'));

// === Arrow function ES6
// const hello1 = (input) => input;
const hello1 = input => input + ' nice to meet you.';

console.log(hello1('Artdvp2'));