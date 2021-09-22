ham = document.querySelector ".hamburger"
nav = document.querySelector ".my-nav"
btns = document.querySelectorAll ".menu-btn"
tabs = document.querySelectorAll ".tab"
# Preloader

$ window
    .on "load", ->
        $ '#preloader' 
            .fadeOut 500
        1



# Hamburger Menu
ham
    .addEventListener "click",->
        ham.classList.toggle "open"
        nav.classList.toggle "open"
        1
# Hamburger End


# Slick
$ document
        .on 'ready', ->
            $ '.center'
                .slick(
                    {
                        centerMode:true,
                        centerPadding:"60px",
                        slidesToShow:3,
                        slidesToScroll:1,
                        autoplaySpeed:3000,
                        arrows:false,
                        infinite: true,
                        # unslick:true
                        responsive:[
                            {
                                breakpoint: 992,
                                settings: {
                                slidesToShow: 2,
                                }
                            },
                            {
                                breakpoint: 576,
                                settings: {
                                slidesToShow: 1,
                                centerPadding: '20px',
                                centerMode:true,
                                }
                            },

                        ]
                    }
                )
# Slick End
                
# Tabs
defa = btns[0]
btns[0].classList.add("active-btn")
tabs[0].classList.add('active-tab')

clip = (x)->
    x.addEventListener 'click', ->
        defa.classList.remove 'active-btn'
        x.classList.add 'active-btn'
        blank = x.id.slice 0,-4
        show_tab  document.querySelector ".#{blank}-tab"
        defa = x

show_tab = (x)->
    i.classList.remove 'active-tab' for i in tabs 
    x.classList.add 'active-tab'

clip x for x in btns



# Tabs End



