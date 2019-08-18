// CHECK FOR SAVED DATA IN LOCAL STORAGE
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');
    
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    };
};

// SAVE TODOS
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// RENDER APPLICATION TODOS
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

    const summary = generateSummaryDOM(incompleteTodos);
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function (todo) {
        const todoEl = generateTodoDOM(todo);
        document.querySelector('#todos').appendChild(todoEl);
    });
};

// GENERATE DOM STRUCTURE FOR A TODO
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const todoCheck = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    
    // SET THE COMPLETED CHECKBOX
    todoCheck.setAttribute('type', 'checkbox');
    todoEl.appendChild(todoCheck);

    // SET THE TODO TEXT
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // SET THE REMOVE TODO BUTTON
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);

    return todoEl;
}

// GENEREATE DOM STRUCTURE FOR SUMMARY
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}