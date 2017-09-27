document.addEventListener('DOMContentLoaded', function() {
    const btnShowMoon = document.getElementById('btnShowMoon');
    const btnCloseMoon = document.getElementById('btnCloseMoon');
    const moonElement = document.getElementById('moonElement');

    function showMoonElement() {
        moonElement.style.display = 'block';
    }

    function hideMoonElement() {
        moonElement.style.display = 'none';
    }

    window.addEventListener('click', function(event) {
        if (event.target === moonElement) {
            hideMoonElement();
        }
    });
    btnShowMoon.addEventListener('click', showMoonElement);
    btnCloseMoon.addEventListener('click', hideMoonElement);
});
