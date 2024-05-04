'use strict';

//////////////////////////////////////////////////////////

let ul = document.querySelector('ul');

for (let i = 1; i <= 100; i++) {

    let li = document.createElement('li');

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        li.append("FizzBuzz");
        ul.append(li);
    } else if (i % 3 === 0) {
        console.log("Fizz");
        li.append("Fizz");
        ul.append(li);
    } else if (i % 5 === 0) {
        console.log("Buzz");
        li.append("Buzz");
        ul.append(li);
    } else {
        console.log(i);
        li.append(i);
        ul.append(li);
    }
}