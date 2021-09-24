
btns = document.querySelectorAll ".menu-btn"
tabs = document.querySelectorAll ".tab"

# Preloader

$ window
    .on "load", ->
        $ '#preloader' 
            .fadeOut 500
        1



# Hamburger Menu



$ '.menu-toggle' 
    .click ->
        $ '.menu-toggle'
            .toggleClass 'open'
        $ ".my-nav"
            .toggleClass 'open'
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
                                autoplay:true,
                                autoplaySpeed:3000,
                                }
                            },

                        ]
                    }
                )
# Slick End
                
# Tabs
defa = btns[0]
defa.classList.add("active-btn")
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


btn_ctx = {
    open:"Show Gallery"
    close:"Hide Gallery"
    mode:true
}


# Gallery 

pics = document.querySelectorAll '.context'
main_pic = document.querySelector '.mid-pic'
btn = document.querySelector '.gallery button' 
body = document.querySelector 'body'
main_pic.classList.add 'gal-show'



btn.addEventListener 'click',->
    hydra i for i in pics if  body.offsetWidth < 780
    btn.classList.toggle('view')
    if btn_ctx.mode
        btn.textContent = btn_ctx.close
        btn_ctx.mode=false
    else
        btn.textContent = btn_ctx.open
        btn_ctx.mode=true
    main_pic.classList.add 'gal-show' 

    


hydra = (pic)->
    pic.classList.toggle "gal-show"





