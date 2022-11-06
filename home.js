{let slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) {
    slideShow(slideIndex += n);
}

function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n) {
  let i;
  let slide = document.getElementsByClassName("top__slides");
  let imageopct = document.getElementsByClassName("slide__top__img-opacity");
  if (n > slide.length) {slideIndex = 1}  
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  for (i = 0; i < imageopct.length; i++) {
    imageopct[i].className = imageopct[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}  
  slide[slideIndex-1].style.display = "block";  
  imageopct[slideIndex-1].className += " active";
  setTimeout(slideShow, 6000);
};
}


{let slideIndex = 1;
slideShow(slideIndex);

function nextSlides(n) {
    slideShow(slideIndex += n);
}

function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let imgopct = document.getElementsByClassName("img-opacity");
  if (n > slides.length) {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < imgopct.length; i++) {
    imgopct[i].className = imgopct[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  slides[slideIndex-1].style.display = "block";  
  imgopct[slideIndex-1].className += " active";
  setTimeout(slideShow, 2000);
}
}
