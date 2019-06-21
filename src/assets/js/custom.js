$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
  $('.navbar-item').click(function (e) {
    e.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 130
      }, 1000)
  })
});
