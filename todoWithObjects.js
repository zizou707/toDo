class Todo {
    constructor(id,text,completed=false){
        this.id=id;
        this.text=text;
        this.completed=completed;
    }
    toggleCompleted(){this.completed=!this.completed}
}

class TodosList {
    constructor(){
        this.todos=[];
    }
    add_Todo(text){
        const newTodo=new Todo(Date.now(),text)
        this.todos.push(newTodo);
        return newTodo
     }
     deleteTodo(id){
        const indexToDelete=this.todos.findIndex((todo) => todo.id === id);
        if (indexToDelete !== false) {
            this.todos.splice(indexToDelete, 1);
          }
        }
     }

     /* displayTodo(todo) {
        const todoListElement = document.getElementById("todoList");
    
        const li = document.createElement("li");
        li.innerHTML = 
          <input type="checkbox" ${
            todo.completed ? "checked" : ""
          } onclick="todoList.toggleCompleted(${todo.id})">
          <span>${todo.text}</span>
          <button onclick="deleteTodo(${
            todo.id
          })" style="margin-left: auto;">Delete</button>
        ;
    
        todoListElement.appendChild(li);
      }
    } */

var todo1=new TodosList();
const newTodo1=todo1.add_Todo('anything');

console.log(newTodo1);
console.log(todo1.todos);

/* function addTodo() {
    const inputElement = document.getElementById("newTodo");
    const todoText = inputElement.value;

    if (todoText.trim() !== "") {

      const newTodo = todoList.add_Todo(todoText);
      displayTodo(newTodo);
      inputElement.value = "";
    }
  } */
