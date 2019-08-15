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
    searchText: '',
    hideCompleted: false
};

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        
        return searchTextMatch && hideCompletedMatch;
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

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = {
        text: e.target.elements.addTodo.value,
        completed: false
    }
    todos.push(newTodo);
    console.log(todos);
    renderTodos(todos, filters);
    e.target.elements.addTodo.value = '';
});

document.querySelector('#completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});