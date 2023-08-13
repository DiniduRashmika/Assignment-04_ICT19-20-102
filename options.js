window.addEventListener('DOMContentLoaded', function() {
	var header = document.getElementById('home');
    var backgrounds = [
        'images/011.png',
        'images/022.png',
        'images/033.jpg'
    ];
    var currentIndex = 0;

    function changeBackground() {
        header.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 5000);
});

