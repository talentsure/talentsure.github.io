$(() => {
  //NavBar Drop Shadow on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $("header").addClass("floatingNav");
    } else {
      $("header").removeClass("floatingNav");
    }
  });

  // Menu bar for Mobile
  $("#menu").click(() => {
    //Making Side Menu Bar Visible/Invisible On Menu Click
    $(".nav-div").toggleClass("nav-div-visible");

    //Changing Menu Icon
    let img = $(".menu-icon").attr("src");
    $(".menu-icon").attr(
      "src",
      img === "./img/icons/menu.svg"
        ? "./img/icons/cross.svg"
        : "./img/icons/menu.svg"
    );

    //Making Side Menu Bar Visible/Invisible When Clicked On Link
    if ($(".nav-div").hasClass("nav-div-visible")) {
      $(".nav-link").click(() => {
        $(".nav-div").removeClass("nav-div-visible");
        $(".menu-icon").attr("src", "./img/icons/menu.svg");
      });
    }
  });

  //Testimonial Slider
  // $(".slider").slick({
  //   nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
  //   prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
  //   autoplay: true,
  //   autoplaySpeed: 7000,
  // });
});
