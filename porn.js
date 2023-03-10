//login codes
let a = document.getElementById('popup');
function openPapa() {
    a.classList.toggle('new-js')
}
function closeThapa() {
    a.classList.toggle('new-js')
}
//join codes
let b = document.getElementById('popuptwo');
function Jointhis() {
    b.classList.toggle('news-js')
}
function SubmitPapa() {
    b.classList.toggle('news-js')
}
//back to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

