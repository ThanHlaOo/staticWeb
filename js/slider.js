$(document).ready(function () {
    $(".slider").slick({
        arrow: true,
        infinite: true,
        dots: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    $(".mv-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        dots: true,
      });
})