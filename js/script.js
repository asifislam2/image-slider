let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  

function showSlides(n){
let slides = document.querySelectorAll(".mySlides")
let dot = document.querySelectorAll(".dot")
let dotarray = Array.from(dot)
let slidesarry = Array.from(slides)
if(n > slidesarry.length){
    slideIndex = 1
}
if(n < 1){
    slideIndex = slides.length
}

slidesarry.map((image) => {
    image.style.display = "none"
})

dotarray.map((mydot) => {
    mydot.className = mydot.className.replace("active", "")
})

slidesarry[slideIndex -1].style.display = "block"
dotarray[slideIndex-1].className += " active";

}

