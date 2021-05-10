var slideId = ["Hawaii", "Las Vegas", "China", "New York", "Paris", "Florida"];
var slideIndex = [1,1,1,1,1,1];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, id) {
  showSlides(slideIndex[id] += n, id);
}

function showSlides(index, id) {
  var i;
  var x = document.getElementsByClassName(slideId[id]);
  if (index > x.length) {
    slideIndex[id] = 1;
  }    
  if (index < 1) {
    slideIndex[id] = x.length;
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[id] - 1].style.display = "block";  
}