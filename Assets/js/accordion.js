{ let accordion = document.getElementsByClassName("accordion-content");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let body = this.nextElementSibling;
    if (body.style.opacity === "1") {
      body.style.opacity = "0";
      body.style.height = "0";
      body.style.transition = "0.5s";

    } else {
      body.style.opacity = "1";
      body.style.height = "75px";
      body.style.transition = "0.5s";
    }
  }); 
}
}

{ let accordion = document.getElementsByClassName("accordion-content__2");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let body = this.nextElementSibling;
    if (body.style.opacity === "1") {
      body.style.opacity = "0";
      body.style.height = "0";
      body.style.transition = "0.5s";

    } else {
      body.style.opacity = "1";
      body.style.height = "75px";
      body.style.transition = "0.5s";
    }
  }); 
}
}
