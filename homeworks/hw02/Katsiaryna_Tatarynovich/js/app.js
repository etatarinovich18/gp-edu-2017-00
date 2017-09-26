document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const btnShowMoon = document.getElementById('btnShowMoon');
    const btnCloseMoon = document.getElementById('btnCloseMoon');
    const moonElement = document.getElementById('moonElement');

    function showMoonElement() {
        moonElement.style.display = 'block';
        moonElement.style.animationName = 'moveDown';
        moonElement.style.animationDuration = '0.5s';
        body.style.overflow = 'hidden';
        body.className = 'overlay';
    }

    function hideMoonElement() {
        moonElement.style.display = 'none';
        body.style.overflow = 'visible';
        body.classList.toggle('overlay');
    }

    btnShowMoon.addEventListener('click', showMoonElement);
    btnCloseMoon.addEventListener('click', hideMoonElement);
});
