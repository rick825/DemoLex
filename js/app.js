// function to show modal
function openModal(){
	document.getElementById("slidemodal").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");
  // var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.remove("mys");
    slides[i].classList.remove("myslidesshow");
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].classList.remove("myslidesremove");
  // slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.add("myslidesshow");
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}