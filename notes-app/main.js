// QUERY SELECTOR 
// const paragraph = document.querySelector('p');

// paragraph.remove();

// QUERY SELECTOR ALL 
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (p) {
    p.textContent = 'Yay'
})