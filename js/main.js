(function() {
  var btns, clip, defa, ham, j, len, nav, show_tab, tabs, x;

  ham = document.querySelector(".hamburger");

  nav = document.querySelector(".my-nav");

  btns = document.querySelectorAll(".menu-btn");

  tabs = document.querySelectorAll(".tab");

  // Hamburger Menu
  ham.addEventListener("click", function() {
    ham.classList.toggle("open");
    nav.classList.toggle("open");
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

}).call(this);


//# sourceMappingURL=main.js.map
//# sourceURL=coffeescript