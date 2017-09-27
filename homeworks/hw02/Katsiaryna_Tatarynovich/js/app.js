document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const btnShowMoon = document.getElementById('btnShowMoon');
    const btnCloseMoon = document.getElementById('btnCloseMoon');
    const moonElement = document.getElementById('moonElement');

    function switchMoonState() {
        moonElement.classList.toggle('display-block');
        body.classList.toggle('overflow-hidden');
    }

    window.addEventListener('click', function(event) {
        if (event.target === moonElement) {
            switchMoonState();
        }
    });
    btnShowMoon.addEventListener('click', switchMoonState);
    btnCloseMoon.addEventListener('click', switchMoonState);
});
