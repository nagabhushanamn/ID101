
const ALL = "all";
const ACTIVE = "active";
const COMPLETED = "completed";

// Model
class Todo {
    constructor(id, title) {
        this.id = id
        this.title = title;
        this.completed = false
    }
}
//----------------------------------------------------------
//service
class TodoService {
    constructor() {
        this.todos = [];
    }
    //
    addTodo(title) {
        let id = Math.floor(Math.random() * 1000);
        let newTodo = new Todo(id, title);
        this.todos = [...this.todos, newTodo]; // immutable
        //this.todos.push(newTodo); // mutable
    }
    showTodos(filter = 'all') {
        if (filter === ALL) {
            this.todos.forEach(function(todo){
                console.log(todo);
            });
        }
    }
}
//----------------------------------------------------------

var service = new TodoService();
service.addTodo('eat');
service.addTodo('sleep');
service.addTodo('dont-work');
service.showTodos();
//------------------------------------