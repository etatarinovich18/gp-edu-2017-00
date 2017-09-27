document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const btnShowMoon = document.getElementById('btnShowMoon');
    const btnCloseMoon = document.getElementById('btnCloseMoon');
    const moonElement = document.getElementById('moonElement');

    function showMoonElement() {
        moonElement.style.display = 'block';
        body.style.overflow = 'hidden';
    }

    function hideMoonElement() {
        moonElement.style.display = 'none';
        body.style.overflow = 'visible';
    }

    window.addEventListener('click', function(event) {
        if (event.target === moonElement) {
            hideMoonElement();
        }
    });
    btnShowMoon.addEventListener('click', showMoonElement);
    btnCloseMoon.addEventListener('click', hideMoonElement);
});
