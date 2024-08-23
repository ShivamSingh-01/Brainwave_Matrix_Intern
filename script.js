let currentList = '';

function showTodoView(list) {
    currentList = list;
    document.getElementById('list-title').textContent = list;
    document.getElementById('list-view').classList.add('hidden');
    document.getElementById('todo-view').classList.remove('hidden');
}

function goBack() {
    document.getElementById('todo-view').classList.add('hidden');
    document.getElementById('list-view').classList.remove('hidden');
}

function addTodo() {
    const todoInput = document.getElementById('new-todo');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });
        
        const span = document.createElement('span');
        span.textContent = todoText;
        span.className = 'todo-text';
        
        li.appendChild(checkbox);
        li.appendChild(span);
        todoList.appendChild(li);
        
        todoInput.value = '';
    }
}