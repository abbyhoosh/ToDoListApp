let app = new Vue({
        el: "#vueApp",
        id: 0,
        data: {
            welcomeMessage: 'Hello World!',
            titleToDo: 'To Do List',
            placeHolder: 'Enter a task here',
            newTodo: '',
            todos: []
        },
        methods: {
            addTodo() { //adds new task to todo list
                this.todos.push({id: id++, text: this.newTodo})
                newTodo = ''
            },
            removeTodo(todo) {
                this.todos = this.todos.filter((x) => x !== this.todo)
            }

        },
        mounted() {

        },

    },

   <div id ="vueApp">
       <form>

       </form>
   </div>);
