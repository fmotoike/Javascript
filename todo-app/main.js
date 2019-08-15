const paragraph = document.querySelectorAll('p');

paragraph.forEach(function (p) {
    const content = p.textContent;
    if (content.toLowerCase().includes('the')) {
        p.remove();
    }
});