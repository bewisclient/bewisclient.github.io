document.addEventListener("DOMContentLoaded", function() {
    {
        var link = document.getElementById("smooth-scroll-link");

        link.addEventListener("click", function(event) {
          event.preventDefault();

          var target = document.getElementsByClassName("version-line");

          var offset = target.offsetTop;

          target.item(0).scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        });
    }
    {
        var link = document.getElementById("smooth-scroll-link-2");

        link.addEventListener("click", function(event) {
          event.preventDefault();

          var target = document.getElementById("top");

          var offset = target.offsetTop;

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        });
    }
  });

