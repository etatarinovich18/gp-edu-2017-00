document.addEventListener('DOMContentLoaded', function() {
    const mediumScreenWidth = 720;
    const detailsWrap = document.getElementById('detailsWrap');
    const goToSiteLink = document.getElementById('goToSiteLink');
    const moreDetailsLink = document.getElementById('moreDetailsLink');

    function moveGoToSiteLink() {
        if (screen.width < mediumScreenWidth) {
            detailsWrap.insertBefore(goToSiteLink, moreDetailsLink);
        }
    }

    moveGoToSiteLink();

});
