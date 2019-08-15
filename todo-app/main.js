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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
});

const summary = document.createElement('h3');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = todo.text;
    document.querySelector('body').appendChild(newParagraph);
});

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('I am adding a new to do.');
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value);
})