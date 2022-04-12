        // let todo = {
        //   texte: "Un exemple truc",
        //   completed: false
        // }

let todoListe = {
    todos : [],
    nombreItems : 0,

    // On devrait pouvoir afficher nos Todos:
    displayTodos : function () {
        if (this.nombreItems === 0) {
            console.log("Votre liste de todos est vide");
        } else {
            console.log("Ma liste de todos: ");
            for (var i = 0; i < this.nombreItems; i++) {
                if (this.todos[i].completed) {
                    //console.log(this.todos[i].texte, "est complété");
                    console.log("(x)", this.todos[i].texte);
                } else {
                    // console.log(this.todos[i].texte, "n'est pas complété");
                    console.log("( )", this.todos[i].texte);
                }
            }
            console.log("Nombre d'item: ", this.nombreItems);
        }
    },

    // On devrait pouvoir ajouter des Todos:
    addTodo : function(item) {
        let newItem = {
            texte: item,
            completed: false
        }
        this.todos.push(newItem);
        this.nombreItems++;
    },

    // On devrait pouvoir changer un todo
    changeTodo : function(pos, newItem) {
        this.todos[pos - 1].texte = newItem;
    },

    // On devrait pouvoir effacer un todo
    deleteTodo : function(pos) {
        this.todos.splice(pos - 1, 1);
        this.nombreItems--;
    },

    // On devrait pouvoir dire qu'on a complété un todo
    toggleCompleted : function(pos) {
        this.todos[pos - 1].completed = !this.todos[pos - 1].completed;
    },

    toggleAll : function() {
        let completedTodos = 0;
        let newCompleted = true;
        for (var i = 0; i < this.nombreItems; i++) {
            if (this.todos[i].completed) {
                completedTodos++;
            }
        }
        if (completedTodos === this.nombreItems) {
            newCompleted = false;
        }
        for (var i = 0; i < this.nombreItems; i++) {
            this.todos[i].completed = newCompleted;
        }
    }
};

let handlers = {
    addTodo : function() {
        let addTodoInput = document.getElementById("addTodoTextInput");;
        todoListe.addTodo(addTodoInput.value);
        addTodoInput.value = "";
        view.displayTodos();
    },
    
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoListe.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoTextInput = "";
        changeTodoPositionInput = "";
        view.displayTodos();
    },
    
    deleteTodo : function() {
        let = deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoListe.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
    },
    
    toggleCompleted : function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoListe.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },

    toggleAll : function() {
        todoListe.toggleAll();
        view.displayTodos();
    }
};

let view = {
    displayTodos: function(){
        let todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";

        for (var i = 0; i < todoListe.nombreItems; i++) {
            let todoLi = document.createElement('li');
            if (todoListe.todos[i].completed) {
                todoLi.textContent = "(x) ";
            } else {
                todoLi.textContent = "( ) ";
            }
            todoLi.textContent += todoListe.todos[i].texte;
            todosUl.appendChild(todoLi);
        }
    }
};
