 var todos = [
   {
     complete: false,
     text: "Learn JavaScript"
   },
   {
     complete: false,
     text: "Learn JavaScript Charting"
   },
   {
     complete: false,
     text: "Make Awesome Front-End Projects"
   }
 ];

// // Getting references to the button and input field
 var addTodoBtn = document.querySelector("#add-todo");
 var todoInput = document.querySelector("#todo-input");


// This function is triggered when the addTodoBtn is clicked
addTodoBtn.addEventListener("click", function() {
	// push is an Array method which adds the last element
	  todos.push({text: todoInput.value,  complete: false});
  renderTodos();
});
// // renderTodos puts the todo list items on the page
function renderTodos() {
  var todoList = document.querySelector("#todo-list");
   var todoHTML = "";
   for (var i = 0; i < todos.length; i++) {
     todoHTML += "<li>" + todos[i].text + "</li>";
   }
   todoList.innerHTML = todoHTML;
 }

 renderTodos();
