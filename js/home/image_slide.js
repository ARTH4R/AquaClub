var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("benner_under_nav_pic");
  var dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  myIndex++;
  
  if (myIndex > x.length) {
    myIndex = 1;
  }    
  
  x[myIndex-1].style.display = "block";  

  // Update the active dot
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[myIndex - 1].classList.add("active");
  
  setTimeout(carousel, 9000); // Change image every 9 seconds
}