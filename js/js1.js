var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
} //slider buttons function (n == -1 to get prev slide and n == 1 to get next slide)

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("sliderMain");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    unfade(x[slideIndex - 1]);

} //slider functionality

function unfade(element) {
    var op = 0.2;  // initial opacity
    element.style.display = 'flex';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.015;
    }, 6);
}

