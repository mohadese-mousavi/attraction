function hideShowCardOverlay() {

    var cardOverlay = document.getElementById("card-overlay");
    if (cardOverlay.classList.contains("hide")) {
        cardOverlay.classList.remove("hide")
    } else {
        cardOverlay.classList.add("hide");
    }


    var arrowIconOverlay = document.getElementById("arrowIconOverlay");

    if (arrowIconOverlay.classList.contains("fa-chevron-up")) {
        arrowIconOverlay.classList.remove("fa-chevron-up");
        arrowIconOverlay.classList.add("fa-chevron-down");

    } else {
        arrowIconOverlay.classList.toggle("fa-chevron-up");
    }


    // var arrowBtnOverlay = document.getElementById("arrowBtnOverlay");
    // arrowBtnOverlay.addEventListener("click", function() {

    //     arrowBtnOverlay.style = 'transform: rotate(' + rot + 'deg)';
    //     rot += 360;
    // });
}