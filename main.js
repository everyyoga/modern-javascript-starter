// Calculation example
function factor(a,b) {
    return a * b;
}

document.querySelector('#console').innerHTML = '3 * 2 = ' + factor(3,2);

// Counter example (for each tab)
let count = 0;
let element = document.querySelector('#counter');
element.addEventListener('click', () => {
    count++;
    element.innerText = 'count = ' + count;
});

