let id = 0;
let app = new Vue({
        el: "#vueApp",

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
            removeTodo(todo) { //removes a task from a todo list
                this.todos = this.todos.filter((x) => x !== this.todo)
            }

        },

        mounted() {

        },

    });
