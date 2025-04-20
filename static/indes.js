const todoList = [];

function addTodo(){
const inputElement =  document.querySelector(".jsin");
const name = inputElement.value;

todoList.push(name);
console.log(todoList);

}
