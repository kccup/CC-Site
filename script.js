window.onload = function() {
    document.getElementById('changeBackground').addEventListener('click', function() {
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
};