// HEADER ANIMATION

var morphing = anime({
  targets: 'path',
  d: [
    // { value: 'M164.144623,274.251511 C113.18059,274.251511 40.2452746,149.810516 71.9877063,113.180447 C103.730138,76.5503775 163.658971,75.2515105 214.623003,75.2515105 C265.587036,75.2515105 285.252082,124.31492 285.252082,164.485381 C285.252082,204.655842 215.108656,274.251511 164.144623,274.251511 Z' },
    { value: 'M125.399349,305.770936 C74.4353161,305.770936 105.071347,158.054315 111.40825,85.6231813 C117.745153,13.1920472 187.06346,64.7359193 228.875446,95.9002294 C270.687432,127.064539 289.793997,189.27861 289.793997,229.449071 C289.793997,269.619532 176.363382,305.770936 125.399349,305.770936 Z' },
    { value: 'M149.182504,297.216918 C98.2184707,297.216918 33.3537118,192.509264 39.6906149,120.07813 C46.027518,47.6469955 207.397701,33.48243 249.209687,64.6467401 C291.021673,95.8110501 283.475282,167.5117 283.475282,207.682161 C283.475282,247.852622 200.146536,297.216918 149.182504,297.216918 Z' },
    { value: 'M151.651776,308.400537 C100.687744,308.400537 30.1348215,225.931601 67.0566676,174.478051 C103.978514,123.024502 239.067785,41.5554777 280.879771,72.7197877 C322.691757,103.884098 232.868742,173.206797 245.022189,240.63983 C257.175635,308.072863 202.615809,308.400537 151.651776,308.400537 Z' },
    { value: 'M125.399349,305.770936 C74.4353161,305.770936 105.071347,158.054315 111.40825,85.6231813 C117.745153,13.1920472 187.06346,64.7359193 228.875446,95.9002294 C270.687432,127.064539 289.793997,189.27861 289.793997,229.449071 C289.793997,269.619532 176.363382,305.770936 125.399349,305.770936 Z' },
    { value: 'M164.144623,274.251511 C113.18059,274.251511 40.2452746,149.810516 71.9877063,113.180447 C103.730138,76.5503775 163.658971,75.2515105 214.623003,75.2515105 C265.587036,75.2515105 285.252082,124.31492 285.252082,164.485381 C285.252082,204.655842 215.108656,274.251511 164.144623,274.251511 Z' },
  ],
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 15000,
  loop: true
});


window.onscroll = function () { scrollFunction() };
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    // $(".navbar").addClass("fixed-top");
    // element.classList.add("header-small");
    // $("body").addClass("body-top-padding");

  } else {
    $(".navbar").removeClass("fixed-top");
    element.classList.remove("header-small");
    $("body").removeClass("body-top-padding");
  }
}

// OWL-CAROUSAL
$('.owl-carousel').owlCarousel({
  items: 3,
  loop: true,
  nav: false,
  dot: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

// SCROLLSPY
$(document).ready(function () {
  $(".nav-link").click(function () {
    var t = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(t).offset().top - 75
    }, {
      duration: 1000,
    });
    $('body').scrollspy({ target: '.navbar', offset: $(t).offset().top });
    return false;
  });

});

// AOS
AOS.init({
  offset: 120,
  delay: 0,
  duration: 1200,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
  disable: "mobile"
});

//SIDEBAR-OPEN
$('#navbarSupportedContent').on('hidden.bs.collapse', function () {
  $("body").removeClass("sidebar-open");
})

$('#navbarSupportedContent').on('shown.bs.collapse', function () {
  $("body").addClass("sidebar-open");
})


window.onresize = function () {
  var w = window.innerWidth;
  if (w >= 992) {
    $('body').removeClass('sidebar-open');
    $('#navbarSupportedContent').removeClass('show');
  }
}