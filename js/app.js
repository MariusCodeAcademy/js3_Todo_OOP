"use strict"; // here we go again

console.log("app.js");
import Todo from "./class/Todo.js";
import State from "./class/State.js";

let t1 = new Todo("read a book");
let t2 = new Todo("read a magazine");

// state - bus laikoma dabartine todo elementu busena ir pagal ja bus atvaizduojamas html
let st = new State();

st.addTodo(t1);
st.addTodo(t2);
st.addTodo(new Todo("Buy bananas"));
st.addTodo(new Todo("Buy shoes"));

st.deleteTodo("t_3");
// st.deleteTodo("nera");
st.addTodo(new Todo("Buy milk"));
st.editTodo("t_5", "Go to park");
console.log(st);
