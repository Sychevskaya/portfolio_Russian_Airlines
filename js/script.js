$(document).ready(function(){
    $('.main-slider_2').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
  });


$(document).ready(function(){
  $('.main-slider_3').slick({
      dots: true,
      slidesToShow: 1
  });
});




$(document).ready(function(){
  $('.main-slider_5').slick({
      arrows:false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});


