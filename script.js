document.getElementById('incrementBtn').addEventListener('click', function() {
    let counter = document.getElementById('counter');
    let count = parseInt(counter.textContent, 10);
    counter.textContent = count + 1;
});
