
(function($){
    $(function(){

        // Is Menu Open
        // ------------
        var isOpen = false

        // Menu Button
        // -----------

        $('.menu-btn').on('click',function(){

            if(isOpen == false){

                $(this).addClass('open')

                $('html,body').animate({scrollTop:sectionOffset1}, function(){

                    $('.wrap').addClass('open')
                    $('body').addClass('hidden')

                    isOpen = true

                })
    
            }else {
                $('.menu-btn').removeClass('open')
                $('.wrap').removeClass('open')
                $('body').removeClass('hidden')
                
                isOpen = false
            }
        })

        // Setting default easing
        // ----------------------
        
        $.easing.def = "easeInOutExpo";

        // Finding sections offsets
        // ------------------------

        var sectionOffset1 = $('#home').offset().top
        var sectionOffset2 = $('#about').offset().top
        var sectionOffset3 = $('#projects').offset().top
        var sectionOffset4 = $('#contact').offset().top

        $(window).on('resize',function(){
            sectionOffset1 = $('#home').offset().top
            sectionOffset2 = $('#about').offset().top
            sectionOffset3 = $('#projects').offset().top
            sectionOffset4 = $('#contact').offset().top
        })

        // Nav Click Event Smooth Scrolling
        // --------------------------------

        $('[data-to]').on('click',function(e){

            e.preventDefault()

            var sTarget = $(this).data('to')

            // Adjusting where the sections should align
            // -----------------------------------------

            var sectionOffset = $(sTarget).offset().top -20

    
            // Custom easeing added
            // --------------------

            $('html,body').animate({scrollTop:sectionOffset}, 1200, 'easeInOutExpo')

        })

        // Mobile Nav Click Event Smooth Scrolling
        // --------------------------------

        $('[data-to-mob]').on('click',function(e){

            e.preventDefault()

            var sTarget = $(this).data('to-mob')

            if(isOpen == true){
                $('.menu-btn').removeClass('open')
                $('body').removeClass('hidden')
                $('.wrap').removeClass('open').one('transitionend',function(){

                    // Adjusting where the sections should align
                    // -----------------------------------------

                    var sectionOffset = $(sTarget).offset().top -20
            
                    // Custom easeing added
                    // --------------------

                    $('html,body').animate({scrollTop:sectionOffset}, 1200, 'easeInOutExpo')

                })
                
                isOpen = false
            }
        })

        // Scrolling Event
        // ---------------

        $(document).on('scroll',function(){

            var scrollTop = $(document).scrollTop()

            // Current Menu Shift        
            var current

            if(scrollTop >= sectionOffset1 && scrollTop < sectionOffset2){
                current = $('#nav-menu > li:nth-child(1) a')
            }
            
            if(scrollTop >= sectionOffset2 - 80 && scrollTop < sectionOffset3){
                current = $('#nav-menu > li:nth-child(2) a')
            }
            
            if(scrollTop >= sectionOffset3 - 80 && scrollTop < sectionOffset4){
                current = $('#nav-menu > li:nth-child(3) a')
            }
            
            if(scrollTop >= sectionOffset4 - 900) {
                current = $('#nav-menu > li:nth-child(4) a')
            }

            current.addClass('current')
            $('#nav-menu > li a').not(current).removeClass('current')

        })


        // Menu Responsive Check
        // ---------------------

        function showWidth(display) {
            if(display) {
                $(window).resize(function(){
                    var width = $(window).innerWidth()
                    
                    if(width > 1041 && isOpen === true ){
                        $('.menu-btn').removeClass('open')
                        $('.wrap').removeClass('open')
                        $('body').removeClass('hidden')  
        
                        isOpen = false
                    }
                }) 
            }
        }

        $(document).ready(function(){
            showWidth(true)
        })

        gsap.registerPlugin(ScrollTrigger);

        // Sticky header
        // -------------

        ScrollTrigger.create({
            start: 'top -130',
            end: 99999,
            toggleClass: {
                className: 'main-header--scrolled',
                targets: '.main-header'
            },
        });

        // Swiper
        // ------
        var mySwiper = new Swiper('.swiper', {
            direction: 'vertical',
            autoHeight: false,
            slidesPerView: 1,
            mousewheel: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
             
        });

        // AOS
        // ---

        $(document).ready(() =>{
            AOS.init({
                anchorPlacement: 'center-bottom'
            });
        })


    })

})(jQuery)