{
let slideIndex = 1;
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


{
let slideIndex = 1;
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


{
let iframe = document.querySelector(".iframe__video");
let stopButton = document.querySelector(".stop__button");
let image = document.getElementById("image");

function startVideo() {
  image.style.display = "none";
  iframe.style.display = "block";
  stopButton.style.display = "block";
}
function stopVideo() {
  stopButton.style.display = "none";
  image.style.display = "block";
  iframe.style.display = "none";
  iframe.src = iframe.src;
}
}


{
let addButton = document.getElementById('button-add');
let input = document.querySelector('.form');



addButton.addEventListener('click' , () => {

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    let messagetrue = document.querySelector('.messagetrue');
    messagetrue.innerHTML = `<div class="position__relative">
    <p class="position__absolute messagetrue">Thank you for your message. It has been sent.</p>
    </div>`
    input.value = ""; 
  }
  else {
    let messagefalse = document.querySelector('.messagefalse');
    messagefalse.innerHTML = `<div class="position__relative">
    <p class="position__absolute messagefalse">One or more fields have an error. Please check and try again.(Example: YusifHuseynzade@gmail.com)</p>
    </div>`
    return false;
  }
}
)}


filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("disp__none");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

