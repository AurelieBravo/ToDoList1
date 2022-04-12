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
                this.todos[pos].texte = newItem;
            },

            // On devrait pouvoir effacer un todo
            deleteTodo : function(pos) {
                this.todos.splice(pos, 1);
                this.nombreItems--;
            },

            // On devrait pouvoir dire qu'on a complété un todo
            toggleCompleted : function(pos) {
                this.todos[pos].completed = !this.todos[pos].completed;
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
        }

        let todosButton = document.getElementById("displayTodosButton");
        todosButton.addEventListener("click", function() {
            todoListe.displayTodos();
        });
        let toggleAllButton = document.getElementById("toggleAllButton");
        toggleAllButton.addEventListener("click", function() {
            todoListe.toggleAll();
        });

        todoListe.displayTodos();

        todoListe.addTodo("item1");
        todoListe.addTodo("item2");
        todoListe.addTodo("item3");

        todoListe.displayTodos();
        todoListe.addTodo("faire autre chose");
        todoListe.displayTodos();
        todoListe.changeTodo(2, "encore un changement");
        todoListe.displayTodos();
        todoListe.toggleCompleted(1);
        todoListe.displayTodos();
        todoListe.deleteTodo(3);
        todoListe.displayTodos();

        // todoListe.toggleAll();
        // todoListe.displayTodos();
        // todoListe.toggleAll();
        // todoListe.displayTodos();
