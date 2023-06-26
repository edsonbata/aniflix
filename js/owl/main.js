$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


document.addEventListener("DOMContentLoaded", function() {
    var upButton = document.querySelector(".up-button");
    var downButton = document.querySelector(".down-button");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        upButton.classList.add("show-button");
      } else {
        upButton.classList.remove("show-button");
      }
  
      if (window.pageYOffset < (document.documentElement.scrollHeight - window.innerHeight - 100)) {
        downButton.classList.add("show-button");
      } else {
        downButton.classList.remove("show-button");
      }
    });
  
    upButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    downButton.addEventListener("click", function() {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    });
  });
  

