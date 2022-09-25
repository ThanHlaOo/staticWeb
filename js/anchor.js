$(document).ready(function () {
  $(".anchor-btn-group .link").on("click", function (e) {
    $(this).addClass("active-tab");
    $(this).siblings().removeClass("active-tab");
      var href = $(this).attr("href");

      $("html, body").animate(
          {
          scrollTop: $(href).offset().top,
          },
        Math.abs(window.scrollY - $(this.hash).offset().top) * .5
      )
      ;

      e.preventDefault();
  });
});