const aboutUsLink = document.querySelector('.nav-item.dropdown .nav-link');
let isClicked = false;

aboutUsLink.addEventListener('click', function(e) {
    if (isClicked) {
        window.location.href = 'aim.html';
    } else {
        isClicked = true;
    }
});
