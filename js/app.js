const slides = document.querySelectorAll('.caseroul img');
var count = 0;
var maxSlide = slides.length;
slides.forEach(item => {
    item.style.display = "none";
});
slides[0].style.display = "block";
function moveSlides(){
    //console.log(slides[count]);
    count++;
    if(count >= maxSlide){
        count = 0;
    }
    slides.forEach(item => {
        item.style.display = "none";
    });
    slides[count].style.display = "block";
}
setInterval(moveSlides,4000);
console.log(maxSlide);

// expand navbar
const menu = document.querySelector('.menu');
menu.addEventListener('click',() => {
    document.body.classList.toggle('navbar-expand');
});

// scrolling fixed header
window.addEventListener('scroll',function(){
    let header = document.querySelector('header');
    let wp = window.scrollY > 200;
    header.classList.toggle('scrolling',wp);
});