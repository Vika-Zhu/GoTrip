

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive : {
      540:{
        items: 3,
      },

      1200: {
        items: 3,
        margin: 30,
      },
  }
  });
  
  $('.slider_btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

  $('.slider_btn-next').click(function() {
      owl.trigger('next.owl.carousel');
  })

  




const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');

 
navBtn.onclick = function(){
  nav.classList.toggle('nav--mobile')
  menuIcon.classList.toggle('menu-icon-active');
  document.body.classList.toggle('no-scroll')
}

