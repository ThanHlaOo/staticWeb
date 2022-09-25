$(document).ready(function () {
  $('.menu-trigger').on('click', function () {
      $(this).toggleClass('active');
      $('.gnav').toggleClass('is-show');
  });

});