 function loadTodos(){
// this function is load todo from the browser
const todos=JSON.parse(localStorage.getItem("todos")) || {"todoList":[]}
console.log(todos)
return todos  
 }
function appendTodoInHtml(todoText){
   const todoList=document.getElementById("todoList")
   const todo=document.createElement("li")
   todo.textContent=todoText
   todoList.appendChild(todo)
}




  


function addTodoToLocalStorage(todoText){
   const todoitem = loadTodos()
   todoitem.todoList.push(todoText)
   localStorage.setItem("todos",JSON.stringify(todoitem))



}






document.addEventListener("DOMContentLoaded", ()=>{
        const todoInput=document.getElementById("todoInput")
        const submitButton=document.getElementById("addTodo")
        submitButton.addEventListener("click", ()=>{
            todoText=todoInput.value
            if (todoText==""){
                 alert("Please Write something for todo")
            }
            else{
                 addTodoToLocalStorage(todoText)
                 appendTodoInHtml(todoText)
            }
        })
    })


todoInput.addEventListener("change", (event)=>{
     todoText=event.target.value
     event.target.value=todoText.trim()
     console.log(event.target.value)
})

const todos = loadTodos();

todos.todoList.forEach(todo => {
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = todo;
    todoList.appendChild(newTodoItem);
})
