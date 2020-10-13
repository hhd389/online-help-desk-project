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