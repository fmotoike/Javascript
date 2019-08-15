const todos = [{
    text: 'Go to the gym',
    completed: true
}, {
    text: 'Study Javascript',
    completed: true
}, {
    text: 'Practice CSS',
    completed: false
}, {
    text: 'Read a book',
    completed: false
}, {
    text: 'Meditate',
    completed: false
}];

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function (todo) {
        let todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoEl);
    });
};

renderTodos(todos, filters);

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('I am adding a new to do.');
});

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value);
});

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});