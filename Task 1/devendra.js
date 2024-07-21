document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task !== "") {
            addTodoItem(task);
            todoInput.value = "";
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const task = todoInput.value.trim();
            if (task !== "") {
                addTodoItem(task);
                todoInput.value = "";
            }
        }
    });

    function addTodoItem(task) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">X</button>
        `;

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = listItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            listItem.classList.add('fadeOut');
            setTimeout(() => {
                todoList.removeChild(listItem);
            }, 300);
        });

        listItem.classList.add('fadeIn');
        todoList.appendChild(listItem);
    }
});
