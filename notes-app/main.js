const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Auckland.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eat better. Meditate.'
}, {
    title: 'Study',
    body: 'CSS. Javascript. React.'
}];

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log(e);
});

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove();
    });
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value);
})