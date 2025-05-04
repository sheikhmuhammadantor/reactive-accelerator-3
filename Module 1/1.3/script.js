/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of reduntant DOM manipulation
 * Author: Sheikh Muhammad Antor
 * Date: May 4, 2025
 *
 */

// Array.prototype.myPush = function (...a) {
//     this.push(a[0]);
//     init();
// }

// const display = document.getElementById("fruits");
// const button = document.querySelector("#button");

// let fruits = ['mango', 'guava', 'apple', 'oragne'];

// const init = function () {
//     document.getElementById("fruits").innerHTML = '';
//     fruits.sort().forEach(fruit => {
//         let item = document.createElement("li");
//         item.textContent = fruit;
//         document.getElementById("fruits").appendChild(item);
//     });
// }

// const addItem = function () {
//     fruits.push(document.getElementById('input').value);
//     init();
//     document.getElementById('input').value = ''
// }

// init();

const fruitsList = document.getElementById("fruits");
const button = document.getElementById("button");

const fruitsArr = ["mango", "guava", "apple", "orange"];

const itemPushInTheList = function () {
    fruitsList.innerHTML = "";
    fruitsArr.sort().forEach(fruit => {
        let item = document.createElement("li");
        item.textContent = fruit;
        fruitsList.appendChild(item);
    });
}

const addItem = function () {
    let inputValue = document.getElementById('input').value;
    fruitsArr.push(inputValue);
    itemPushInTheList();
    document.getElementById('input').value = "";
}

itemPushInTheList();