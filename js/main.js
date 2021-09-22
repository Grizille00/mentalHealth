(function() {
  var body, btn, btn_ctx, btns, clip, defa, hydra, j, len, main_pic, pics, show_tab, tabs, x;

  btns = document.querySelectorAll(".menu-btn");

  tabs = document.querySelectorAll(".tab");

  // Preloader
  $(window).on("load", function() {
    $('#preloader').fadeOut(500);
    return 1;
  });

  // Hamburger Menu
  $('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('open');
    $(".my-nav").toggleClass('open');
    return 1;
  });

  // Hamburger End

  // Slick
  $(document).on('ready', function() {
    return $('.center').slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: true,
      // unslick:true
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerPadding: '20px',
            centerMode: true
          }
        }
      ]
    });
  });

  // Slick End

  // Tabs
  defa = btns[0];

  btns[0].classList.add("active-btn");

  tabs[0].classList.add('active-tab');

  clip = function(x) {
    return x.addEventListener('click', function() {
      var blank;
      defa.classList.remove('active-btn');
      x.classList.add('active-btn');
      blank = x.id.slice(0, -4);
      show_tab(document.querySelector(`.${blank}-tab`));
      return defa = x;
    });
  };

  show_tab = function(x) {
    var i, j, len;
    for (j = 0, len = tabs.length; j < len; j++) {
      i = tabs[j];
      i.classList.remove('active-tab');
    }
    return x.classList.add('active-tab');
  };

  for (j = 0, len = btns.length; j < len; j++) {
    x = btns[j];
    clip(x);
  }

  // Tabs End
  btn_ctx = {
    open: "View All",
    close: "Close"
  };

  // Gallery 
  pics = document.querySelectorAll('.context');

  main_pic = document.querySelector('.mid-pic');

  btn = document.querySelector('.gallery button');

  body = document.querySelector('body');

  main_pic.classList.add('gal-show');

  btn.addEventListener('click', function() {
    var i, k, len1;
    if (body.offsetWidth < 576) {
      for (k = 0, len1 = pics.length; k < len1; k++) {
        i = pics[k];
        hydra(i);
      }
    }
    btn.style.display = 'none';
    return main_pic.classList.add('gal-show');
  });

  hydra = function(pic) {
    return pic.classList.toggle("gal-show");
  };

}).call(this);


//# sourceMappingURL=main.js.map
//# sourceURL=coffeescript