document.addEventListener("DOMContentLoaded", function(event) {
    var slideshowTrack = document.querySelector(".slideshow-track");
    var slides = Array.from(document.querySelectorAll(".slide"));
  
    var slideWidth = slides[0].offsetWidth;
    var currentIndex = 0;
  
    function slideTo(index) {
      slideshowTrack.style.transform = "translateX(-" + (((index) * slideWidth)) + "px)";
    }

    console.log(slideWidth);
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % (slides.length);
      slideTo(currentIndex);
    }
  
    slideTo(currentIndex);
    setInterval(nextSlide, 3000); // Ändere den Wert, um die Dauer zwischen den Bildern anzupassen
  });

  window.addEventListener('scroll', function() {
    var position = document.getElementById("name").getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (position < screenHeight -1000) {
      var element = document.querySelector('.hidden');
      if(element) {
        element.classList.add('visible');
        element.classList.remove('hidden');
      }
    }
    if (position >= window.innerHeight-1000) {
      var element = document.querySelector('.visible');
      if(element) {
        element.classList.add('hidden');
        element.classList.remove('visible');
      }
    }
  });