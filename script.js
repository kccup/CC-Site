const changeBackgroundButton = document.getElementById('changeBackground');

changeBackgroundButton.addEventListener('click', () => {
    const body = document.body;
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor;
});

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let counter = 0;

document.getElementById('changeBackground').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[counter];
    counter = (counter + 1) % colors.length;
});