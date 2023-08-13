window.addEventListener('DOMContentLoaded', function() {
	var header = document.getElementById('home');
    var backgrounds = [
    	'images/Background.jpg',
        'images/BG_1.jpg',
        'images/BG_2.avif',
        'images/BG_3.jpg'
    ];
    var currentIndex = 0;

    function changeBackground() {
        header.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 5000);
});


function openCard() {
    var overlay = document.createElement('div');
    overlay.id = 'overlay';

    var card = document.createElement('div');
    card.id = 'card';

    var iframe = document.createElement('iframe');
    iframe.src = 'Loginpage1.html';
    iframe.style.width = '200%';
    iframe.style.height = '150%';

    card.appendChild(iframe);

    document.body.appendChild(overlay);
    document.body.appendChild(card);

    overlay.style.display = 'block';
    card.style.display = 'block';
}

function closeCard() {
    var overlay = document.getElementById('overlay');
    var card = document.getElementById('card');
    document.body.removeChild(overlay);
    document.body.removeChild(card);
}


function form_controls() {
	emailId = document.getElementById('email').value;
	msgId = document.getElementById('message').value;

	if(!emailId.includes("@")){
		alert('Enter a valid Email');
	}
	else if (msgId.length < 5) {
		alert('Enter a valid Message');
	}
	else{
		alert('Thank you for your message!');
	}
}




