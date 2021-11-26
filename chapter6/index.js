// === Basic Object
// Array 
const arr = [1,2,3,4,5,6];
console.log(arr);

// Object
// KEY: Value
const obj1 = new Object();
obj1.name = 'Art';
obj1.color = 'Green';

console.log(obj1);

const obj2 = {
    name: 'Art',
    color: 'Green',
    age: 27,
    status: false
}

console.log(obj2);

// === change value in object ==> mutate
obj2.name = 'John';

console.log(obj2);

// === Object can store value as function
const obj3 = {
    name: 'Clown',
    color: 'Pink',
    age: 90,
    hello: function() {
        return `hello ${this.name}`
    }
}

console.log(obj3);
console.log(obj3.hello());

const obj4 = {
    name: 'Mata',
    color: 'Blue',
    age: 22,
    hello1: function() {
        console.log(this);
    },
    hello2: () => {
        console.log(this);
    }
}

obj4.hello1();
obj4.hello2();