function ContactFunction() {
    var x = document.getElementById("contact");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
    
  }