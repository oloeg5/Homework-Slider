let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let cities = document.getElementsByClassName("city");
  let tables = document.getElementsByClassName("second_section_table")

  if (n > slides.length){
    slideIndex = 1
  }

  if (n < 1){
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  if (n > tables.length){
    slideIndex = 1
  }

  if (n < 1){
    slideIndex = tables.length
  }

  for (i = 0; i < tables.length; i++){
    tables[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("activedot", "");
  }

  for (i = 0; i < cities.length; i++){
    cities[i].className = cities[i].className.replace("active", "");
  }

  slides[slideIndex-1].style.display = "block";
  tables[slideIndex-1].style.display = "grid";
  cities[slideIndex-1].className += "active";
  dots[slideIndex-1].className += "activedot"
}










